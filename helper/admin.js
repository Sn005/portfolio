/**
 * 権限owner肯否確認関数
 * @param {string} role 権限名
 * @returns {boolean} onwnerであるか否か
 */
export const isOwner = (role) => {
  return role === 'owner'
}
