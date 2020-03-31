/* eslint-disable no-undef */
'use strict';

$(document).ready(function(){

  function Horns (horns){
    this.image_url=horns.image_url;
    this.title=horns.title;
    this.description=horns.description;
    this.keyword=horns.keyword;
    this.horns=horns.horns;
    allofHorns.push(this);
    console.log(this);

  }


  var allofHorns = [];

  let keywords = [];
  let value;




  Horns.prototype.render=function(){
    let $hornClone=$('.photo-template').clone();
    $hornClone.find('h2').text(this.title);
    $hornClone.find('img').attr('src',this.image_url);
    $hornClone.find('p').text(this.description);
    $hornClone.removeClass('photo-template');
    $hornClone.attr('class',this.keyword);
    $hornClone.show();
    $('.allphotos').append($hornClone);



  };

  const readJson=()=>{
    $.ajax('data/page-1.json',{method:'GET',dataType:'JSON'}).then(data=>{

      data.forEach(horns => {
        let allhorns=new Horns(horns);
        // console.log(data);
        allhorns.render();
        // allhorns.loadingHorns();
        // allhorns.filter();
        // createList();
        // forEach();

        // renderImage();
        // change();

      });
    });
  };

  readJson();



  $.get('data/page-1.json', function(data) {
    let $data = data;
    $data.forEach(function(element){
      allofHorns.push(new Horns(element.image_url, element.title, element.description, element.keyword, element.horns));
      keywords.push(element.keyword);
    });
    keywords.forEach(function(element){
      createList(element);
    });
    $('select').change(function(event){
      // console.log(event);
      value = event.originalEvent.target.value;
      // console.log(allofHorns);
      // console.log(value)
      allofHorns.forEach(function(element){
        // console.log(element);
        // console.log(element.keyword);
        // console.log($('.'+element.keyword));
        // $('#'+element.keyword).forEach(function(e){
        //   e.hide();
        // });
        if(element.keyword !== value && value !== 'default'){
          $('.'+element.keyword).hide();
        }
        else{
          $('.'+element.keyword).show();
        }
      });
    });
    // allofHorns.forEach(function(element){
    //   renderImage(element.url, element.title, element.description, element.horns, element.keyword);
    // });
    keywords = new Set(keywords);
  });
  console.log(keywords);

  // console.log(image);

  // function renderImage(url, title, description, horns, keyword) {
  //   if(keyword === value) {
  //     let $title = $('<h2>').text(title);
  //     let $img = $('<img>').attr('src', url).attr('alt', description);
  //     let $text = $('<p>').text(`Number of horns: ${horns}`);
  //     $('#photo-template').append($title, $img, $text);
  //   }
  // }



  function createList(keyword) {
    let $option = $('<option>').text(keyword).attr('value', keyword);
    $('select').append($option);
  }










});


















