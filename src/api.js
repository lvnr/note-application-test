import axios from 'axios'

// GITHUB TOKEN (DISQO Test)
const AUTH_TOKEN = '440e0d474f80badcac0bfbd6c203375835adbf11'

const getOptions = () => ({
  baseURL: 'https://api.github.com',
  timeout: 20000,
  mode: 'cors',
  headers: {
    Authorization: `token ${AUTH_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
})

export const getNotepad = async (id) => {
  try {
    const response = await axios.get(`/gists/${id}`, getOptions())
    const { data } = response
    return data
  } catch (error) {
    console.error('Error getting Notepads: ', error);
  }
}

export const getNotepads = async () => {
  try {
    const response = await axios.get('/gists', getOptions())
    // NOTE: this is not the most efficient approach,
    // but can easily be refactored if not all of the Notepads need to be displayed at once
    const notepads = await Promise.all(response.data.map(async (item) => await getNotepad(item.id)))
    return notepads || []
  } catch (error) {
    console.error('Error getting Notepads: ', error);
  }
}

export const createNotepad = async (title, notes) => {
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
    console.error('Error creating a Notepad: ', error);
  }
}

export const updateNotepad = async (Notepad_id, title, notes) => {
  try {
    const body = {
      description: title,
      files: notes,
    }
    const response = await axios.patch(`/gists/${Notepad_id}`, body, getOptions())
    const { data } = response
    return data || null
  } catch (error) {
    console.error('Error updating Notepad: ', error);
  }
}

export const deleteNotepad = async (Notepad_id) => {
  try {
    return await axios.delete(`/gists/${Notepad_id}`, getOptions())
  } catch (error) {
    console.error('Error deleting Notepad: ', error);
  }
}
