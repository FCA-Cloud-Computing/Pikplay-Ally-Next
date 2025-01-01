import CustomFetch from "../../components/fetch/CustomFetch";
const { get, post } = CustomFetch()

const getComptSrv = async (ctx, slug = null) => {
  const path = slug ? `/competitions/${slug}` : '/competitions'
  return get(ctx, path);
}

const getEnvVariablesSrv = async (ctx, slug = null) => {
  return get(ctx, "");
}

const postCompetitionMemberSrv = async (ctx, competitionID, number, uid) => {
  const path = '/competition-members/register'
  return post(ctx, path, { competitionID, number, uid })
}

const deleteCompetitionMemberSrv = async (competitionID, number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
  // const url = path + '/delete-member'
  // const params = { competitionID, number }
  // const data = await post(null, path, params)
  // return data
}

export {
  deleteCompetitionMemberSrv,
  getComptSrv,
  getEnvVariablesSrv,
  postCompetitionMemberSrv
}
