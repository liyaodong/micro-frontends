let linkHandler;

((global) => {
    global['nav'] = {
        bootstrap: () => {
            console.log('nav bootstrap');
            return Promise.resolve();
        },
        mount: (props) => {
            console.log('nav mount');
            linkHandler = (e) =>
                props.appNavigate(e.currentTarget.dataset.target);
            const links = document.querySelectorAll('.js-links a') || [];
            links.forEach((element) => {
                element.addEventListener('click', linkHandler);
            });
            return Promise.resolve();
        },
        unmount: () => {
            console.log('nav unmount');
            document.querySelectorAll('.js-links a').forEach((element) => {
                element.removeEventListener('click', linksHandler);
            });
            return Promise.resolve();
        },
    };
})(window);
