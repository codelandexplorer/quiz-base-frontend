let category = {
    key: 'biology 7 class',
    name: 'биология 7 класс'
  };
  
  async function createCategory() {
    try {
      let response = await fetch('http://localhost:8080/categories/new',  {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(category)
      });
  
      if (!response.ok) {
        throw new Error('Ошибка HTTP: ' + response.status);
      }
  
      let json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }
  
  createCategory();
  

  