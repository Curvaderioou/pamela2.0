
    const tabMenu = document.querySelectorAll('[data-tab="menu"] button')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
  
  
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add("ativo")
        function activeTab(index) {
          tabContent.forEach((section)=>{
          section.classList.remove("ativo")
        })
          const direction = tabContent[index].dataset.anime;
          tabContent[index].classList.add("ativo", direction)
        }
          tabMenu.forEach((itemMenu, index)=>{
          itemMenu.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
    }

    if(tabMenu.length){
      tabMenu[0].classList.add("press")
      function activePress(index) {
        tabMenu.forEach((li)=>{
        li.classList.remove("press")
      })
        const press_btn = tabMenu[index].dataset.anime;
        tabMenu[index].classList.add("press", press_btn)
      }
        tabMenu.forEach((itemMenu, index)=>{
        itemMenu.addEventListener("click", ()=> { 
        activePress(index)
      })
    })
    }

