

function url() {
  fbq("track", "Purchase");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}
$(document).ready(function(){
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  // window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: '#swiper-pagination1',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        820: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },

      navigation: {
        nextEl: '#swiper-button-next1',
        prevEl: '#swiper-button-prev1',
      },
      autoplay: {
        delay: 3000,
      }
    
    });


    $("blockquote p strong").closest('blockquote').addClass("relative");



    const header = ` 

      
      
      `;
    // $("#header").html(header);
 
    const content_right = `           `;
    $("#content_right").html(content_right);

    const footer = `
        
    
    `;

  // $("#footer").html(footer);  
  const backtotop = `<button class="Btn-backtotop1 ">
          <svg  class="Btn cursor-pointer-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 



  // $('.header2  ul.items-center > li').each(function() {
  //   a = $(this).find(".tittle_navbar").text();
    
  //   if(active == a){
      
  //     $(this).addClass('B');
  //   }
  // });

  // $("#content_right .link").each(function(){
  //   c = $(this).find("#menu_link").text();
  //   if(active == c){
  //     $(this).find("#menu_link").addClass("text-gray-900");
      
  //   }
    
    
  // });


  $("#menu-icon").on("click", function () {

    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $('#mobile').addClass("hidden");
    }
    else{
        $(this).addClass("active");
        $('#mobile').removeClass("hidden");
    }
  });


    $(document).on("click", function (event) {
      if (!$(event.target).closest("#mobile").length && !$(event.target).closest("#menu-icon").length ) {
        $('#mobile').addClass("hidden");
        $('#menu-icon').removeClass("active");
      }
    });


    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });






});

