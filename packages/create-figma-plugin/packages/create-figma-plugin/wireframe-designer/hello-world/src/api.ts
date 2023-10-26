const BASE_URL = 'https://api.asksage.ai' // This is a placeholder. Replace with the actual Ask Sage API endpoint.

async function postToSageAPI(endpoint: string, data: any) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
      // Add any necessary headers, like API keys or authentication tokens
    },
    method: 'POST'
  })

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return await response.json()
}

async function fetchImageFromDALLE(description: string) {
  const response = await fetch(`${BASE_URL}/dalle/generate`, {
    body: JSON.stringify({ description }),
    headers: {
      'Content-Type': 'application/json'
      // Add any necessary headers, like API keys or authentication tokens
    },
    method: 'POST'
  })

  if (!response.ok) {
    throw new Error(`DALL-E request failed with status ${response.status}`)
  }

  return await response.json()
}

export { fetchImageFromDALLE, postToSageAPI }
