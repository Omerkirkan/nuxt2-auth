export default function(context) {
    const status = context.store.getters.getAuth;
    
    if (!status) {
        context.redirect('/auth/signin');
    }
}