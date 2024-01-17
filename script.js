const plus = document.getElementById('plus');
const plus1 = document.getElementById('plus1');
const plus2 = document.getElementById('plus2');
const plus3 = document.getElementById('plus3');
const minus = document.getElementById('minus');
const minus1 = document.getElementById('minus1');
const minus2 = document.getElementById('minus2');
const minus3 = document.getElementById('minus3');
const under = document.getElementById('under');
const under1 = document.getElementById('under1');
const under2 = document.getElementById('under2');
const under3 = document.getElementById('under3');
const under4 = document.getElementById('under4');


plus.addEventListener('click', function(){
    under.style.display = 'inline-block';
    plus.style.display = 'none';
    minus.style.display = 'block';
});
minus.addEventListener('click', function(){
    under.style.display = 'none';
    plus.style.display = 'block';
    minus.style.display = 'none';
});

plus1.addEventListener('click', function(){
    under2.style.display = 'inline-block';
    plus1.style.display = 'none';
    minus1.style.display = 'block';

});
minus1.addEventListener('click', function(){
    under2.style.display = 'none';
    plus1.style.display = 'block';
    minus1.style.display = 'none';
});

plus2.addEventListener('click', function(){
    under3.style.display = 'inline-block';
    plus2.style.display = 'none';
    minus2.style.display = 'block';
});
minus2.addEventListener('click', function(){
    under3.style.display = 'none';
    plus2.style.display = 'block';
    minus2.style.display = 'none';
});

plus3.addEventListener('click', function(){
    under4.style.display = 'inline-block';
    plus3.style.display = 'none';
    minus3.style.display = 'block';
});
minus3.addEventListener('click', function(){
    under4.style.display = 'none';
    plus3.style.display = 'inline-block';
    minus3.style.display = 'none';
});