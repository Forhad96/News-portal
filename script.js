const LoadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  const categories = data.data.news_category;
  const categoriesContainer = document.getElementById("categories-container");

  // console.log(categoriesContainer, categories);
  categories.slice(0, 3).forEach((category) => {
    // console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick ='displayNewsHandler("${category.category_id}")' class="tab tab-bordered">${category.category_name}</a> 
        `;
    // div.children[1].classList.add('active')
    categoriesContainer.appendChild(div);
  });
};

// const displayCategories = (categories) => {

// };

const displayNewsHandler = async (categoryId) => {
  console.log(categoryId);
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await res.json();
  // console.log(data);
  const newsData = data.data.slice(0,6);
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";
  newsData.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title font-bold">
      ${news?.title?.slice(0, 20)}

      <div class="indicator">
      <span class="indicator-item badge badge-accent">${
        news?.rating?.number
      }</span> 
      <button class="btn bg-teal-200">Excellent</button>
    </div>
      </h2>
      <p>${news?.details?.slice(0, 50)}</p>
      <p class= 'font-bold'>Total view:${news.total_view}</p>
      <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div >
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src="${news.author.img}"
                />
              </div>
            </div>
          </div>
          <div>
            <h6 class = "font-medium">${news.author.name}</h6>
            <small>${news.author.published_date}</small>
          </div>
        </div>
        <div class="card-details-btn">
          <button
            onclick = "modalHandler('${news._id}')"
            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(div);
  });

};




const modalHandler = async (detailsId) =>{
  // console.log(detailsId)
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${detailsId}`);
  const data = await res.json();
  const modalDetails = data.data;
  // console.log(modalDetails);
  modalDetails.forEach(details =>{
    // console.log(details);
    const div = document.getElementById('div')
    div.innerHTML = `
    <!-- You can open the modal using ID.showModal() method -->
<dialog id="my_modal_3" class="modal">
  <form method="dialog" class="modal-box">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>
    `
    my_modal_3.showModal()
  })
}

displayNewsHandler("01");
LoadData();
