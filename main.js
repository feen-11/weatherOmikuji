'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() =>{
    const results = ['晴れ', '曇り', '雨', '雪', '霧'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

  });
}
