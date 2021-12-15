const getClassName = (elements, arr) => {
                for (let i = 0; i < elements.length; i++) {
                    const node = elements[i];

                    if (node.classList.length > 0) {
                            for (let n = 0; n < node.classList.length; n++) {
                                arr.push(node.classList.item(n));
                            }
                        }

                    if (node.hasChildNodes()) {
                        getClassName(node, arr)
                    }
                }
            }
            
            const allClasses = [];
            getClassName(document.body.querySelectorAll('*'), allClasses);
            console.log(allClasses);
