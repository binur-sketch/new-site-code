import { supabase } from '../../lib/supabase';

export const adminApi = {
  listPosts: async (limit = 100) => {
    const { data, error } = await supabase
      .from('posts')
      .select('*, categories(*), tags(*)')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data;
  },

  listCategories: async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) throw error;
    return data;
  },

  listTags: async () => {
    const { data, error } = await supabase.from('tags').select('*');
    if (error) throw error;
    return data;
  },

  createCategory: async (name) => {
    const slug = name.toLowerCase().replace(/ /g, '-');
    const { data, error } = await supabase.from('categories').insert([{ name, slug }]).select().single();
    if (error) throw error;
    return data;
  },

  createTag: async (name) => {
    const slug = name.toLowerCase().replace(/ /g, '-');
    const { data, error } = await supabase.from('tags').insert([{ name, slug }]).select().single();
    if (error) throw error;
    return data;
  },

  createPost: async (payload) => {
    const { categories, tags, ...postData } = payload;
    const { data: post, error } = await supabase.from('posts').insert([postData]).select().single();
    if (error) throw error;

    if (categories && categories.length > 0) {
      const links = categories.map(catId => ({ post_id: post.id, category_id: catId }));
      const { error: catError } = await supabase.from('post_categories').insert(links);
      if (catError) throw catError;
    }
    return post;
  },

  updatePost: async (id, payload) => {
    const { categories, tags, ...postData } = payload;
    const { data: post, error } = await supabase.from('posts').update(postData).eq('id', id).select().single();
    if (error) throw error;

    if (categories) {
      const { error: delError } = await supabase.from('post_categories').delete().eq('post_id', id);
      if (delError) throw delError;

      if (categories.length > 0) {
        const links = categories.map(catId => ({ post_id: id, category_id: catId }));
        const { error: insError } = await supabase.from('post_categories').insert(links);
        if (insError) throw insError;
      }
    }
    return post;
  },

  publishPost: async (id) => {
    const { error } = await supabase
      .from('posts')
      .update({ status: 'published', published_at: new Date().toISOString() })
      .eq('id', id);
    if (error) throw error;
  },

  withdrawPost: async (id) => {
    const { error } = await supabase
      .from('posts')
      .update({ status: 'draft' })
      .eq('id', id);
    if (error) throw error;
  },

  deletePost: async (id) => {
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) throw error;
  },

  listMedia: async (limit = 60) => {
    const { data, error } = await supabase.from('media').select('*').limit(limit).order('uploaded_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  uploadMedia: async (file, metadata = {}) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('media').upload(fileName, file);
    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage.from('media').getPublicUrl(fileName);

    const { data: mediaRecord, error: mediaError } = await supabase.from('media').insert([{
      filename: fileName,
      url: publicUrl,
      file_type: file.type,
      size: file.size,
      alt_text: metadata.alt_text || '',
    }]).select().single();
    
    if (mediaError) throw mediaError;
    return mediaRecord;
  },

  deleteMedia: async (id) => {
    const { data: media } = await supabase.from('media').select('filename').eq('id', id).single();
    if (media) {
      await supabase.storage.from('media').remove([media.filename]);
    }
    const { error } = await supabase.from('media').delete().eq('id', id);
    if (error) throw error;
  },
};

