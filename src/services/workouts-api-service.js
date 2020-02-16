import config from '../config'
import TokenService from '../services/token-service'
import fetch from 'node-fetch'

const ExamApiService = {
  getWorkouts () {
    const workoutsUrl = `${config.REACT_APP_API_ENDPOINT}/api/workouts`
    return fetch(workoutsUrl, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
  },

  postWorkout (id, userName, newWorkoutData) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/api/workouts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        user_name: userName,
        newWorkoutData
      })
    })
  },

  updateWorkout (body) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/api/workouts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  },

  deleteWorkout (workoutId) {
    return fetch(
      `${config.REACT_APP_API_ENDPOINT}/api/workouts/${workoutId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }
    )
  }

}

export default ExamApiService
