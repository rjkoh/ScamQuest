export async function getQuestions() {
  try {
    const response = await fetch('http://127.0.0.1:5000/questions');
    
    if (!response.ok) {
      console.log("Error fetching questions")
    }
  
    const questions = await response.json();
    
    return questions;
    } catch (err) {
      alert(err);
    }
}

export async function getTrends() {
  try {
  const response = await fetch('http://127.0.0.1:5000/trends');
  
  if (!response.ok) {
    console.log("Error fetching trends")
  }

  const data = await response.json();
  
  return data['Data'];
  } catch (err) {
    alert(err)
  }
}