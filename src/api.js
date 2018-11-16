import axios from 'axios'

// GITHUB TOKEN (DISQO Test)
const AUTH_TOKEN = '45cd630f4c3ab6b629a79767c44b50eb171ce4d4'

const getOptions = () => ({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  mode: 'cors',
  headers: {
    Authorization: `token ${AUTH_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
})

export const getNotebooks = async () => {
  try {
    const response = await axios.get('/gists', getOptions())
    const { data } = response
    return data || []
  } catch (error) {
    console.error('Error getting notebooks: ', error);
  }
}

export const createNotebook = async (title, notes) => {
  try {
    const body = {
      public: true,
      description: title,
      files: notes,
    }
    const response = await axios.post('/gists', body, getOptions())
    const { data } = response
    return data || null
  } catch (error) {
    console.error('Error creating a notebook: ', error);
  }
}

export const updateNotebook = async (notebook_id, title, notes) => {
  try {
    const body = {
      description: title,
      files: notes,
    }
    const response = await axios.patch(`/gists/${notebook_id}`, body, getOptions())
    const { data } = response
    return data || null
  } catch (error) {
    console.error('Error updating notebook: ', error);
  }
}

export const deleteNotebook = async (notebook_id) => {
  try {
    return await axios.delete(`/gists/${notebook_id}`, getOptions())
  } catch (error) {
    console.error('Error deleting notebook: ', error);
  }
}
