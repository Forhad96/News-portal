const LoadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const categories = data.data.news_category;
    // console.log(isArray(categories));
    displayCategories(categories)
  }

  const displayCategories = (categories) =>{
    const categoriesContainer = document.getElementById('categories-container');

    console.log(categoriesContainer, categories);
    categories.slice(0,3).forEach(category => {
        const div = document.createElement('div');

        div.innerHTML += `
        <a class="tab tab-bordered">${category.category_name}</a> 
        `
        // div.children[1].classList.add('active')
        categoriesContainer.appendChild(div)

    });
  }
//   displayCategories()

  LoadData()