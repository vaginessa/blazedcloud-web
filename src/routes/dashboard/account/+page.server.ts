export const load = async ({ locals }) => {
    return {
        userRecord: locals.pb.authStore.model,
    }
}