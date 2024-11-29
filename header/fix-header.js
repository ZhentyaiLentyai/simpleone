document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const contentTitle = document.querySelector(".content__title");
    const contentForm = document.querySelector(".content__form");
    const navigator = document.querySelector(".navigator");

    // Сложная система для ровного скрола
    let isFixed = false;
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const contentFormWidth = entry.contentRect.width;
            if (contentFormWidth > 576) {
                contentForm.style.marginTop = '110px';
                contentTitle.style.marginTop = '0px';
                contentTitle.classList.add("fixed");
                
            } else {
                contentForm.style.marginTop = '0px';
                contentTitle.style.marginTop = '48px';
                contentTitle.classList.remove("fixed");

            }
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            if (!isFixed) {
                header.classList.add("fixed");
                contentTitle.classList.add("fixed");
                navigator.style.marginTop = '48px';

                resizeObserver.observe(contentForm);
                isFixed = true;              
            }
        } else {
            if (isFixed) {
                header.classList.remove("fixed");
                contentTitle.classList.remove("fixed");
                navigator.style.marginTop = '0px';
                contentForm.style.marginTop = '0px';

                resizeObserver.unobserve(contentForm);
                isFixed = false;
                contentTitle.style.marginTop = '0px';
            }
        }
    });
});
