let btn = document.querySelectorAll('.card .btn')
function basketItem(id,count){
    this.Id = id;
    this.Count = count;
   }

   
        

btn.forEach(ele=>{
    ele.addEventListener('click',function(e){
        e.preventDefault();

   
        let dataId=ele.parentNode.parentNode.getAttribute('data-id');
        let basketItemsStr = localStorage.getItem('basketItems')
        let basketItems;

        if(!basketItemsStr){
            basketItems = [];
        }
        else{
            basketItems = JSON.parse(basketItemsStr)
        }

        let item = basketItems.find(x=>x.Id == dataId)

        if(item){
            item.Count++;
        }
        else{
            item= new basketItem(dataId,1);
            basketItems.push(item);
            
        }
        
        
        document.querySelector('.icon .item-count').innerText = basketItems.length
        localStorage.setItem('basketItems',JSON.stringify(basketItems))

        let sideBar =document.querySelector('.side-bar')

        if(item){
            let p =document.createElement('p')
            p.style.position = 'relative';
            p.innerText ='Item id:'+item.Id +" "+'Item count:'+item.Count;
            p.classList.add = item.id; 
            sideBar.appendChild(p)
            
            let span = document.createElement('span')
            span.innerText ='X';
            span.style.position = 'absolute'
            span.style.top = '-10px';
            span.classList.add('spans')
            p.appendChild(span);

            span.addEventListener('click',function(){
                console.log(p);
            })

           
        }
       
       
        
        
       
    
    })
})


let icon = document.querySelector('.icon a')

icon.addEventListener('click',function(){
    let sideBar = document.querySelector('.side-bar')
    
    sideBar.classList.toggle('display')
    
})
