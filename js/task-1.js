let items = document.querySelectorAll("ul .item");

    console.log(`Numbers of categories: ${items.length}`);

items.forEach(item => {
    let categoryName = item.querySelector("h2").textContent;
    let elementsCount = item.querySelectorAll("ul li").length;

    console.log(`Categories: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});
