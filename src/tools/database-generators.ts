import { Model } from "mongoose"
import { CommonCard, KeeperCard, SeekerCard } from "src/modules/game/schemas/deck.shemas"

const addPlayerCardToBase = async(cardInfo: CommonCard, model: Model<CommonCard>, count: number = 1) => {
  for(let i = 1; i <= count; i++) {
    if(i > 1) {
      cardInfo.id = cardInfo.id + 1
    }
    await model.create(cardInfo);
  }
}

export const addCommonPlayerCardsToBase = async(model: Model<CommonCard>) => {
  await addPlayerCardToBase({
    id: 1,
    name: 'Нож',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1ZrvUlL2Z70l-qL_RbrmBnsFSWZSnh91g&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'hand',
    attributes: ['strength'],
    tags: ['доступ', 'предмет', 'оружие', 'рукопашное']
  }, model, 4);

  await addPlayerCardToBase({
    id: 5,
    name: 'Фонарь',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1ZC1vGzA8SsS-we36Bn2eWpLiwRNkD6Dg&sz=w1000',
    cost: 2,
    level: 0,
    slot: 'hand',
    attributes: ['intelligence'],
    tags: ['доступ', 'предмет', 'инструмент']
  }, model, 4);

  await addPlayerCardToBase({
    id: 9,
    name: 'Тайник',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1ZLA_seil0zVX3OonHsuZNaGqPvsQ_jAu&sz=w1000',
    cost: 0,
    level: 0,
    tags: ['событие', 'запас']
  }, model, 4);

  await addPlayerCardToBase({
    id: 13,
    name: 'Храбрость',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1ZrE68-rtCJe6oRXMS6FmT8WsPhwaUt-E&sz=w1000',
    attributes: ["mind", "mind"],
    tags: ['навык', 'прирожденный']
  }, model, 2);

  await addPlayerCardToBase({
    id: 15,
    name: 'Внимательность',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1ZnC2copizOn-egtKD0W9GXhDeLCQ0Rf3&sz=w1000',
    attributes: ["intelligence", "intelligence"],
    tags: ['навык', 'приобретенный']
  }, model, 2);

  await addPlayerCardToBase({
    id: 17,
    name: 'Ловкость рук',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Z1iiIBIzHSIL5TgIntiL1R5-8j72PvNX&sz=w1000',
    attributes: ["agility", "agility"],
    tags: ['навык', 'приобретенный']
  }, model, 2);

  await addPlayerCardToBase({
    id: 19,
    name: 'Подавление',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1ZARtJMQSxyXzsFU_aDu_UnT2qBnXT20L&sz=w1000',
    attributes: ["strength", "strength"],
    tags: ['навык', 'приобретенный']
  }, model, 2);

  await addPlayerCardToBase({
    id: 21,
    name: 'Неожиданная смелость',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Z2MYt0TImBdOp-svFar1XRon5CjpECo-&sz=w1000',
    attributes: ["universal", "universal"],
    tags: ['навык', 'прирожденный']
  }, model, 2);

  await addPlayerCardToBase({
    id: 23,
    name: 'Амулет со знаком Древних',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_3kWRWMZZzg_-nCQ_lMoPtI1HYj6CR_M&sz=w1000',
    cost: 2,
    level: 3,
    slot: 'accessory',
    attributes: ["mind", "universal"],
    tags: ['доступ', 'предмет', 'реликвия']
  }, model, 2);

  await addPlayerCardToBase({
    id: 25,
    name: 'Бронежилет>',
    type: 'common',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Zsf-yxADK445wevcnG7X60ZAMxeB6EPn&sz=w1000',
    cost: 2,
    level: 3,
    slot: 'dress',
    attributes: ["strength", "universal"],
    tags: ['доступ', 'предмет', 'броня']
  }, model, 2);
}

export const addSeekerPlayerCardsToBase = async(model: Model<SeekerCard>) => {
  await addPlayerCardToBase({
    id: 1,
    name: 'Библиотекарь-исследователь',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UlWC9LMOaaGY3JL_X6eWRZaSue8NP9a1&sz=w1000',
    cost: 2,
    level: 0,
    slot: 'ally',
    attributes: ['agility'],
    tags: ['доступ', 'союзник', 'мискатоник']
  }, model, 1);

  await addPlayerCardToBase({
    id: 2,
    name: 'Старая книга знаний',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UlFV4iv1kuk5SceO1kDgciQoJoZudAio&sz=w1000',
    cost: 3,
    level: 0,
    slot: 'hand',
    attributes: ['mind'],
    tags: ['доступ', 'предмет', 'книга']
  }, model, 1);

  await addPlayerCardToBase({
    id: 3,
    name: 'Увеличительное стекло',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UhB-JBgeJDCdvnecwsaiwNDVtP6AVsZa&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'hand',
    attributes: ['intelligence'],
    tags: ['доступ', 'предмет', 'инструмент']
  }, model, 1);

  await addPlayerCardToBase({
    id: 4,
    name: 'Увеличительное стекло',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UqZGXkbUYKWiwsBv1NYo-tsVqBXSlkUI&sz=w1000',
    cost: 0,
    level: 1,
    slot: 'hand',
    attributes: ['intelligence'],
    tags: ['доступ', 'предмет', 'инструмент']
  }, model, 1);

  await addPlayerCardToBase({
    id: 5,
    name: 'Сверхнастороженность',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Umy7-4O8W-6qgr7Okk_cdvzy4zmiaTFN&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['intelligence', 'agility'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 6,
    name: 'Доктор Кристофер Милан',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Up2438_h-cfh8LhJAOXN7rqOXnFaECa4&sz=w1000',
    cost: 4,
    level: 0,
    slot: 'ally',
    attributes: ['intelligence'],
    tags: ['доступ', 'союзник', 'мискатоник']
  }, model, 1);

  await addPlayerCardToBase({
    id: 7,
    name: 'Медицинские записи',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UoYDlAyJiIXhKQMIWDs-QXWmWOh8anW-&sz=w1000',
    cost: 2,
    level: 0,
    slot: 'hand',
    attributes: ['strength'],
    tags: ['доступ', 'предмет', 'книга']
  }, model, 1);

  await addPlayerCardToBase({
    id: 8,
    name: 'Баррикада',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UuMFShD2H5jOTSqxFpqEGZszBLnUvvLO&sz=w1000',
    cost: 0,
    level: 0,
    attributes: ['mind', 'intelligence', 'agility'],
    tags: ['событие', 'проницательность', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 9,
    name: 'Сознание и материя',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1XooNGieKNrTC3DhV3LR6iAQfp6osxYAO&sz=w1000',
    cost: 1,
    level: 0,
    attributes: ['strength', 'agility'],
    tags: ['событие', 'проницательность']
  }, model, 1);

  await addPlayerCardToBase({
    id: 10,
    name: 'Исследование догадки',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1XnU4KDR7aYdsstfQZ_X2d40iyN58ZL5Q&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['intelligence', 'intelligence'],
    tags: ['событие', 'проницательность']
  }, model, 1);

  await addPlayerCardToBase({
    id: 11,
    name: 'Дедукция',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Xp-IyNMc4LJ-esK_GaPCvY4aFWKuscaW&sz=w1000',
    level: 0,
    attributes: ['intelligence'],
    tags: ['навык', 'тренированный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 12,
    name: 'Диск Ицамны',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UwZZWudaCzmmRevzJ8cqaa8zFOBfXu2l&sz=w1000',
    cost: 3,
    level: 2,
    slot: 'accessory',
    attributes: ['mind', 'intelligence', 'strength'],
    tags: ['доступ', 'предмет', 'реликвия']
  }, model, 1);

  await addPlayerCardToBase({
    id: 13,
    name: 'Разгадывание тайны',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UgVqAr-L9fIumk_ta58CGhSF6f8tWDiY&sz=w1000',
    cost: 0,
    level: 4,
    tags: ['событие', 'проницательность']
  }, model, 1);

  await addPlayerCardToBase({
    id: 14,
    name: 'Энциклопедия',
    type: 'seeker',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1UeOX2A-tUzS8_eIJtR6aF1vjJfZ4pBHC&sz=w1000',
    cost: 2,
    level: 2,
    attributes: ['universal'],
    slot: 'hand',
    tags: ['доступ', 'предмет', 'книга']
  }, model, 1);
}

export const addKeeperPlayerCardsToBase = async(model: Model<KeeperCard>) => {
  await addPlayerCardToBase({
    id: 1,
    name: 'Кольт 45-го калибра',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TWDGdWVTIoxDgPxKdQbn66ye5IsbXQmE&sz=w1000',
    cost: 4,
    level: 0,
    slot: 'hand',
    attributes: ['agility'],
    tags: ['предмет', 'оружие', 'огнестрельное']
  }, model, 1);

  await addPlayerCardToBase({
    id: 2,
    name: 'Физическая тренировка',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Tlx0wwvuefnOHmdyJhkXfog7l4u7tk9R&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['mind', 'strength'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 3,
    name: 'Мачете',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TYr1CjqGNzUkP8XZsmI4dxuBevCjAvFk&sz=w1000',
    cost: 3,
    level: 0,
    slot: 'hand',
    attributes: ['strength'],
    tags: ['доступ', 'предмет', 'оружие', 'рукопашное']
  }, model, 1);

  await addPlayerCardToBase({
    id: 4,
    name: 'Уклонение',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TmNSoGjbhF5JVSc3PR9N-vLv6SewiqZi&sz=w1000',
    cost: 1,
    level: 0,
    attributes: ['mind', 'agility'],
    tags: ['событие', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 5,
    name: 'Первая помощь',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TlJjbniOR6pCAgW6Bd-qERjJuXy3RjYn&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['mind'],
    tags: ['доступ', 'умение', 'наука']
  }, model, 1);

  await addPlayerCardToBase({
    id: 6,
    name: 'Зацепка!',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Tkz3EjF-Z6TCzzp8rX76a6cuC6IgWmaW&sz=w1000',
    cost: 1,
    level: 0,
    attributes: ['intelligence', 'intelligence'],
    tags: ['событие', 'проницательность']
  }, model, 1);

  await addPlayerCardToBase({
    id: 7,
    name: 'Патрульный офицер',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TrX0KH2pd6UkT_4efWOPjwTAaUL6lnTx&sz=w1000',
    cost: 4,
    level: 0,
    slot: 'ally',
    health: 2,
    mind: 2,
    attributes: ['strength'],
    tags: ['доступ', 'союзник', 'полиция']
  }, model, 1);

  await addPlayerCardToBase({
    id: 8,
    name: 'Патрульный офицер',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Tqs0Xx5eJ4uQm6eLSwVNXx9Eh4fPtTmL&sz=w1000',
    cost: 4,
    level: 2,
    slot: 'ally',
    health: 3,
    mind: 2,
    attributes: ['strength', 'agility'],
    tags: ['доступ', 'союзник', 'полиция']
  }, model, 1);

  await addPlayerCardToBase({
    id: 9,
    name: 'Сторожевой пес',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TpCjfsv4n-jNv31dM4cnVCAJbwUDVJS3&sz=w1000',
    cost: 3,
    level: 0,
    slot: 'ally',
    health: 3,
    mind: 1,
    attributes: ['strength'],
    tags: ['доступ', 'союзник', 'существо']
  }, model, 1);

  await addPlayerCardToBase({
    id: 10,
    name: 'Яростный удар',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Tev46qlqZumpKZXBri3ulGzrY6ua1xb0&sz=w1000',
    level: 0,
    attributes: ['strength'],
    tags: ['навык', 'тренированный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 11,
    name: 'Взрыв динамита',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TkAKLSeoJ4iQ-wpEx4YWvleQsEMbufBb&sz=w1000',
    cost: 5,
    level: 0,
    attributes: ['mind'],
    tags: ['событие', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 12,
    name: 'Дополнительные боеприпасы',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TiMZEYs5O7kQfdWe1MygdO6ABw87kN9-&sz=w1000',
    cost: 2,
    level: 1,
    attributes: ['intelligence'],
    tags: ['событие', 'запас']
  }, model, 1);

  await addPlayerCardToBase({
    id: 13,
    name: 'Дробовик',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TTY8yS7N_tc0wL0AiFL_CEWSMzdbMe_1&sz=w1000',
    cost: 5,
    level: 4,
    slot: 'two-hand',
    attributes: ['strength', 'strength'],
    tags: ['доступ', 'предмет', 'оружие', 'огнестрельное']
  }, model, 1);

  await addPlayerCardToBase({
    id: 14,
    name: 'Полицеский жетон',
    type: 'keeper',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1TapXB7Me5QcloLvyDYxqHybi2KznTn-O&sz=w1000',
    cost: 3,
    level: 2,
    slot: 'accessory',
    attributes: ['mind', 'universal'],
    tags: ['доступ', 'предмет']
  }, model, 1);
}