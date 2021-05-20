
function toggle(){
  const trailer = document.querySelector('.video__trailer');
  trailer.classList.toggle('active')
}

function close(){
  const close = document.querySelector('.close_tr');
  close.classList.add('close')
}

const contentBlock = document.querySelector('.slider__container');


function lleyn(){
  contentBlock.innerHTML = ''
  contentBlock.innerHTML = `<li class="slider__element3">
                <div class="slider__section--slide3">
                  <div class="slider__main--text">
                    <img src="./assets/2_CHARS/2_CHARS_head.png" alt="">
                  </div>
                
                  <div class="slider__main--content">

                    <div class="slider__left--side">
                      <div class="left__side--title">
                        <img class="left__title--image" src="./assets/2_CHARS/2_CHARS_name_Lleyn.png" alt="">
                      </div>
                      <div class="left__side--fraction">
                        <img src="./assets/2_CHARS/2_CHARS_fraction_Lleyn.png" alt="">
                        <div class="slider__fraction--lleyn">Империя бессмертных</div>
                      </div>
                      <div class="left__side--text">
                        Зверолюд Ллейн выбрал кровавый 
                        путь найомного убийцы в тайной 
                        организации "Покров". Его прозвали 
                        "Дикий клинок" из-за жесткости и 
                        скорости.
                      </div>
                      <div class="left__side--skills">
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Lleyn_1.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Дикий разрез
                            </div>
                            <div class="skill__description">
                              Превращает 30% нанесенного урона в ОЗ.
                            </div>
                          </div>
                        </div>
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Lleyn_2.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Найти и уничтожить
                            </div>
                            <div class="skill__description">
                              Наности 313% урона врагу.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="slider__right--side">
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form1" onclick="isolda()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form2" onclick="pamela()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form3  active3" onclick="lleyn()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                    </div>
                  </div>
                  <div class="slider__main--semi-text">
                    60 наемников с неповторимой историей и сотни возможностей для построения команды ждут
                    тебя! Система связей между персонажами - важная часть игрового сюжета и тонкий механизм
                    настройки боевого отряда. Выбери свою фракцию и побучай бонусы к мощи.
                  </div>
                  <div class="slider__main--arrow">
                    <a href="#">
                      <div class="slider__main--arrow-active">
                      </div>
                    </a>
                  </div>
                </div>
              </li>`
}

function isolda(){
  contentBlock.innerHTML = ''
  contentBlock.innerHTML = `<li class="slider__element1">
                <div class="slider__section--slide1">
                  <div class="slider__main--text">
                    <img src="./assets/2_CHARS/2_CHARS_head.png" alt="">
                  </div>
                
                  <div class="slider__main--content">
                
                    
                    <div class="slider__left--side">
                      <div class="left__side--title">
                        <img class="left__title--image" src="./assets/2_CHARS/2_CHARS_name_Isolda.png" alt="">
                      </div>
                      <div class="left__side--fraction">
                        <img src="./assets/2_CHARS/2_CHARS_fraction_Isolda.png" alt="">
                        <div class="slider__fraction--immortal">Империя бессмертных</div>
                      </div>
                      <div class="left__side--text">
                        Появление королевы холода и ее
                        верного медведя предвещает
                        ледяная буря. Неуязвимая Изольда
                        замораживает противников
                        насмерть и не знает пощады.
                      </div>
                      <div class="left__side--skills">
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Isolda_1.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Конец зимы
                            </div>
                            <div class="skill__description">
                              360% урона авангарду врага
                            </div>
                          </div>
                        </div>
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Isolda_2.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Морозная ария
                            </div>
                            <div class="skill__description">
                              Ледяной щим уменьшает полученный урон на 20%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    
                    <div class="slider__right--side">
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form1 active1" onclick="isolda()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form2" onclick="pamela()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form3" onclick="lleyn()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                    </div>
                  </div>
                  <div class="slider__main--semi-text">
                    60 наемников с неповторимой историей и сотни возможностей для построения команды ждут
                    тебя! Система связей между персонажами - важная часть игрового сюжета и тонкий механизм
                    настройки боевого отряда. Выбери свою фракцию и побучай бонусы к мощи.
                  </div>
                  <div class="slider__main--arrow">
                    <a href="#">
                      <div class="slider__main--arrow-active">
                      </div>
                    </a>
                  </div>
                </div>
              </li>`
}

function pamela(){
  contentBlock.innerHTML = ''
  contentBlock.innerHTML = `<li class="slider__element2">
                <div class="slider__section--slide2">
                  <div class="slider__main--text">
                    <img src="./assets/2_CHARS/2_CHARS_head.png" alt="">
                  </div>
                
                  <div class="slider__main--content">

                    <div class="slider__left--side">
                      <div class="left__side--title">
                        <img class="left__title--image" src="./assets/2_CHARS/2_CHARS_name_Pamela.png" alt="">
                      </div>
                      <div class="left__side--fraction">
                        <img src="./assets/2_CHARS/2_CHARS_fraction_Pamela.png" alt="">
                        <div class="slider__fraction--illuminate">Империя бессмертных</div>
                      </div>
                      <div class="left__side--text">
                        Памела - супруга древнего 
                        огненного дракона, одна из первых 
                        овледала магией. Никто не знает, 
                        на чьей стороне она сражается на 
                        самом деле
                      </div>
                      <div class="left__side--skills">
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Pamela_1.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Черное дыхание
                            </div>
                            <div class="skill__description">
                              Наносит вращу и мин. ОЗ 426% урона
                            </div>
                          </div>
                        </div>
                        <div class="skill">
                          <img src="./assets/2_CHARS/2_CHARS_skill_Pamela_2.png" alt="">
                          <div class="skill__info">
                            <div class="skill__title">
                              Проклятие дракона
                            </div>
                            <div class="skill__description">
                              Ледяной щим уменьшает полученный урон на 20%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="slider__right--side">
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form1" onclick="isolda()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form2 active2" onclick="pamela()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                      <div class="slide__form1">
                        <label for="icon__item">
                          <div class="icon__image--form3" onclick="lleyn()"></div>
                        </label>
                        <input class="input__icon" type="radio" name="icon__item" id="icon__item">
                      </div>
                    </div>
                  </div>
                  <div class="slider__main--semi-text">
                    60 наемников с неповторимой историей и сотни возможностей для построения команды ждут
                    тебя! Система связей между персонажами - важная часть игрового сюжета и тонкий механизм
                    настройки боевого отряда. Выбери свою фракцию и побучай бонусы к мощи.
                  </div>
                  <div class="slider__main--arrow">
                    <a href="#">
                      <div class="slider__main--arrow-active">
                      </div>
                    </a>
                  </div>
                </div>
              </li>`
}