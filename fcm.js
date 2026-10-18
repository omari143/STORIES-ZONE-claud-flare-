export function setupFcm(supabase) {
  // Android inaiita hii ikiwa na token
  window.onFcmToken = async (token) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const { error } = await supabase
      .from('users')
      .update({
        fcm_token: token,
        fcm_token_updated_at: new Date().toISOString()
      })
      .eq('auth_user_id', session.user.id);

    if (error) console.error('FCM save error:', error.message);
    else console.log('FCM token imehifadhiwa');
  };

  // Mtumiaji aliyeshaingia: omba token kila ukurasa unapofunguka
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session && window.AndroidApp?.requestFcmToken) {
      window.AndroidApp.requestFcmToken();
    }
  });
}
