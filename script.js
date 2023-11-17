let menuButton = document.getElementById('menu');
    let menuContainer = document.querySelector('.menu-nav');

    let openSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" aria-hidden="true" role="img" class="open-hamburger-icon" fill="white" height="32" width="32"><path d="M19.25 7.5H4.75c-.41 0-.75-.34-.75-.75S4.34 6 4.75 6h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z"></path></svg>Menu';

    let closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" aria-hidden="true" role="img" class="close-hamburger-icon" fill="white" height="28" width="28"><path d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22z"></path><path d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path></svg>Menu';

    let menu = null;
    let isOpen = false;

    menuButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the click event from propagating to the document

        isOpen = !isOpen; // Toggle the state
        updateMenu();
    });

    document.addEventListener('click', function () {
        if (isOpen) {
            isOpen = false;
            updateMenu();
        }
    });

    menuContainer.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent clicks within the menu from closing it
    });

    function updateMenu() {
        if (isOpen) {
            // Create the menu
            menu = document.createElement('div');
            menu.className = 'dropdown-menu';
            menu.innerHTML = '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';

            // Position the menu below the menu button
            let rect = menuButton.getBoundingClientRect();
            menu.style.position = 'absolute';
            menu.style.top = rect.bottom + 'px';
            menu.style.left = rect.left + 'px';

            // Append the menu to the DOM
            document.body.appendChild(menu);
        } else {
            // Remove the menu from the DOM
            if (menu) {
                menu.parentNode.removeChild(menu);
                menu = null;
            }
        }

        // Update the menu button icon
        menuButton.innerHTML = isOpen ? closeSvg : openSvg;
    }