export const RETRIEVE_USERS = 'RETRIEVE_USERS'

export function retrieveUsers(users) {
  return {
    type: RETRIEVE_USERS,
    users
  }
}
