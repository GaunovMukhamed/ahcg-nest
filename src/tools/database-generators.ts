import { Model } from "mongoose"
import { Character } from "src/modules/game/schemas/character.schema";
import { CommonCard, DodgerCard, KeeperCard, MysticCard, SeekerCard, SurvivorCard } from "src/modules/game/schemas/deck.shemas"
import { Scenario } from "src/modules/game/schemas/scenario.schema";

const addPlayerCardToBase = async(cardInfo: CommonCard, model: Model<CommonCard>, count: number = 1) => {
  for(let i = 1; i <= count; i++) {
    if(i > 1) {
      cardInfo.id = cardInfo.id + 1
    }
    await model.create(cardInfo);
  }
}

export const addCharactersToBase = async(model: Model<Character>) => {
  await model.collection.deleteMany({});
  await model.create({
    id: 0,
    name: 'Роланд Бэнкс',
    health: '9',
    mind: 5,
    agility: 2,
    intelligence: 3,
    strength: 4,
    will: 3,
    frontImg: 'https://drive.google.com/thumbnail?id=1RXL0elNmxVOlZnN_QqaVyD5q7w81oFd6&sz=w1000',
    backImg: 'https://drive.google.com/thumbnail?id=1RczOoD93Nirpbs6PMXC1N1GRQ8WFBfns&sz=w1000',
    miniImg: 'https://drive.google.com/thumbnail?id=1Rs9Lts4YRKvi4MzcZYO2n8sTS5TfZZ1u&sz=w1000',
    deckTypes: ['keeper', 'seeker', 'common']
  });
  await model.create({
    id: 2,
    name: 'Дэйзи Уокер',
    health: '5',
    mind: 9,
    agility: 2,
    intelligence: 5,
    strength: 2,
    will: 3,
    frontImg: 'https://drive.google.com/thumbnail?id=1RTzbbsDJ6oqHoP7QRqnIdIXu3OIcH4Fb&sz=w1000',
    backImg: 'https://drive.google.com/thumbnail?id=1RM4nuB14pvPVMvMs0jGDj8_enl6r8GM9&sz=w1000',
    miniImg: 'https://drive.google.com/thumbnail?id=1Rj_bM1kFmCBTtIEKIFUyKYxQH1Nkyf3s&sz=w1000',
    deckTypes: ['seeker', 'mystic', 'common']
  });
  await model.create({
    id: 3,
    name: '"Скользский" О`Тул',
    health: '8',
    mind: 6,
    agility: 4,
    intelligence: 3,
    strength: 3,
    will: 2,
    frontImg: 'https://drive.google.com/thumbnail?id=1RPkJEnS7VQLN07Vm9OpcWdu3KPZT47Tu&sz=w1000',
    backImg: 'https://drive.google.com/thumbnail?id=1RS8Ykqxt7TkcRKIvSN3BIc8VxGx5UM3f&sz=w1000',
    miniImg: 'https://drive.google.com/thumbnail?id=1RfUhxuWc10IHQKJ-XTzXOKFEjEXNgn06&sz=w1000',
    deckTypes: ['dodger', 'keeper', 'common']
  });
  await model.create({
    id: 4,
    name: 'Агнес Бейкер',
    health: '6',
    mind: 8,
    agility: 3,
    intelligence: 2,
    strength: 2,
    will: 5,
    frontImg: 'https://drive.google.com/thumbnail?id=1RboOmclrc_psUkxT-L9Q4RYn9iGN7P8O&sz=w1000',
    backImg: 'https://drive.google.com/thumbnail?id=1RYlhcTi-DJcgOfFzA4TqLVpad83wRxoK&sz=w1000',
    miniImg: 'https://drive.google.com/thumbnail?id=1RtPEtjfr1HvbMFo6EvPL-w20KnMfodZ5&sz=w1000',
    deckTypes: ['mystic', 'survivor', 'common']
  });
  await model.create({
    id: 5,
    name: 'Венди Адамс',
    health: '7',
    mind: 7,
    agility: 4,
    intelligence: 3,
    strength: 1,
    will: 4,
    frontImg: 'https://drive.google.com/thumbnail?id=1RTeU-lW1MbVs3EkrrntsrhWfv9iPfURR&sz=w1000',
    backImg: 'https://drive.google.com/thumbnail?id=1RKLaE1XXtlmOTXkthgWNLI1NHaxnNFZZ&sz=w1000',
    miniImg: 'https://drive.google.com/thumbnail?id=1RjoT9Pd6W_GPzY6GRJHi999osiB0GF8V&sz=w1000',
    deckTypes: ['mystic', 'survivor', 'common']
  });
}

export const addCommonPlayerCardsToBase = async(model: Model<CommonCard>) => {
  await model.collection.deleteMany({});
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
  await model.collection.deleteMany({});
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
  await model.collection.deleteMany({});
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
    health: '2',
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
    health: '3',
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
    health: '3',
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

export const addDodgerPlayerCardsToBase = async(model: Model<DodgerCard>) => {
  await model.collection.deleteMany({});
  await addPlayerCardToBase({
    id: 1,
    name: 'Выкидной нож',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WGvCTPQNtpFhPtXd-jHg9tGh_M8REUcj&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'hand',
    attributes: ['agility'],
    tags: ['доступ', 'предмет', 'оружие', 'рукопашное', 'незаконный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 2,
    name: 'Дерринджер 41-го калибра',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1VpCgqwGMANku1dMi4nuzQ2KytTWjMdss&sz=w1000',
    cost: 3,
    level: 0,
    slot: 'hand',
    attributes: ['strength'],
    tags: ['доступ', 'предмет', 'оружие', 'огнестрельное', 'незаконный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 3,
    name: 'Неуловимый',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WHshyj1gpug4Tph0kvAXbYKWugWOnM7E&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['intelligence', 'agility'],
    tags: ['событие', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 4,
    name: 'Карманная кража',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1VoPJbx3AIyp2cyIGkwBGWozLNxP3rhKj&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['agility'],
    tags: ['доступ', 'умение', 'незаконный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 5,
    name: 'Жизненный опыт',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WA3A8jVBlPmDQT6Y_2Nt9XFpJohgHRzS&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['strength', 'agility'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 6,
    name: 'Ограбление',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1W5gmnCRJNVre2YHjIXtoIlGylkB7JILV&sz=w1000',
    cost: 1,
    level: 0,
    attributes: ['intelligence'],
    tags: ['доступ', 'умение', 'незаконный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 7,
    name: 'Лео де Лука',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Vhvt70-dxC_WU4HrqcrIa_186uuOPaZj&sz=w1000',
    cost: 6,
    level: 0,
    slot: 'ally',
    attributes: ['intelligence'],
    tags: ['доступ', 'союзник', 'преступник']
  }, model, 1);

  await addPlayerCardToBase({
    id: 8,
    name: 'Лео де Лука',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WJ1JiMtT4j-DoE-HbM0nHwn9DtuyTscS&sz=w1000',
    cost: 5,
    level: 1,
    slot: 'ally',
    health: '2',
    mind: 2,
    attributes: ['intelligence'],
    tags: ['доступ', 'союзник', 'преступник']
  }, model, 1);

  await addPlayerCardToBase({
    id: 9,
    name: 'Скрытая атака',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1W2EMZugMffRcoAbHbOWykWYi3-1m8thV&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['intelligence', 'strength'],
    tags: ['событие', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 10,
    name: 'Удар в спину',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1VnaqnkVOfMUHgh4lg0im3ULz4nuLmenB&sz=w1000',
    cost: 3,
    level: 0,
    attributes: ['strength', 'agility'],
    tags: ['событие', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 11,
    name: 'Воспользоваться моментом',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WB0u1LY8O8_qbujEVo0NQ_7ABPF9Ej54&sz=w1000',
    level: 0,
    attributes: ['universal'],
    tags: ['навык', 'прирожденный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 12,
    name: 'Ловкий трюк',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1VwHBUY_x7kr0l89SVjUt5wUiZBO5Q1UY&sz=w1000',
    cost: 2,
    level: 3,
    tags: ['событие', 'фортуна', 'проницательность']
  }, model, 1);

  await addPlayerCardToBase({
    id: 13,
    name: 'Ловкий грабитель',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1W3mqVPyLMEDn8WnSSMVA7CzmxRe_CCIs&sz=w1000',
    cost: 4,
    level: 1,
    slot: 'ally',
    health: '2',
    mind: 2,
    attributes: ["mind", "agility"],
    tags: ['доступ', 'союзник', 'преступник']
  }, model, 1);

  await addPlayerCardToBase({
    id: 14,
    name: 'Выигрышная комбинация',
    type: 'dodger',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WJkK_t3eBbme8seU_DoYs4QeJ-kHer9Y&sz=w1000',
    cost: 3,
    level: 4,
    attributes: ["universal"],
    tags: ['событие', 'фортуна']
  }, model, 1);
}

export const addMysticPlayerCardsToBase = async(model: Model<MysticCard>) => {
  await model.collection.deleteMany({});
  await addPlayerCardToBase({
    id: 1,
    name: 'Святые четки',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1XJTaq3EdtePPX4DRzfd9jMixYovfZyw5&sz=w1000',
    cost: 2,
    level: 0,
    slot: 'accessory',
    mind: 2,
    attributes: ['mind'],
    tags: ['доступ', 'предмет', 'оберег']
  }, model, 1);

  await addPlayerCardToBase({
    id: 2,
    name: 'Запретное знание',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1X1Igsre0qyjpkQYoJBggLhazStU9vVMT&sz=w1000',
    cost: 0,
    level: 0,
    attributes: ['intelligence'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 3,
    name: 'Предсказание',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WxjMg_Jv1cWps_Ce3Jz6Jos_rttz5hHJ&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'magic',
    attributes: ['intelligence'],
    tags: ['доступ', 'заклинание']
  }, model, 1);

  await addPlayerCardToBase({
    id: 4,
    name: 'Иссушение',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WroNdaxFvu_lywn3jL-1XJzj5_faXdAr&sz=w1000',
    cost: 3,
    level: 0,
    slot: 'magic',
    attributes: ['strength'],
    tags: ['доступ', 'заклинание']
  }, model, 1);

  await addPlayerCardToBase({
    id: 5,
    name: 'Магическая практика',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WrU5Bki2bpL0bQgulGAXvtGqur6X1Cne&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['mind', 'intelligence'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 6,
    name: 'Защитный знак',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WwgP96LKyBvNkbBXMisbkOd2_ujf2mI6&sz=w1000',
    cost: 1,
    level: 0,
    attributes: ['universal'],
    tags: ['событие', 'заклинание', 'дух']
  }, model, 1);

  await addPlayerCardToBase({
    id: 7,
    name: 'Ослепляющий свет',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WsgxV58u4CsIs-6O2WsZ-GXGmhv7wQ8d&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['mind', 'agility'],
    tags: ['событие', 'заклинание']
  }, model, 1);

  await addPlayerCardToBase({
    id: 8,
    name: 'Ослепляющий свет',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1XJMNLVwY7xYyvLsbYCk6u7sFCWHUKLnd&sz=w1000',
    cost: 1,
    level: 2,
    attributes: ['mind', 'agility'],
    tags: ['событие', 'заклинание']
  }, model, 1);

  await addPlayerCardToBase({
    id: 9,
    name: 'Завороженный пламенем',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WvzX1KC4pjgyLKwBgdNxChwXSXmgZQve&sz=w1000',
    cost: 0,
    level: 0,
    attributes: ['mind', 'intelligence'],
    tags: ['событие', 'проницательность']
  }, model, 1);

  await addPlayerCardToBase({
    id: 10,
    name: 'Бесстрашие',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1WuOjmyWOEkWd5NivHqmCdxdoJqggN3q9&sz=w1000',
    level: 0,
    attributes: ['mind'],
    tags: ['навык', 'прирожденный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 11,
    name: 'Посвященная',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1XE8fyyh7SISlzAykLlXP55E_2KxPdkBX&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'dress',
    attributes: ['mind'],
    tags: ['доступ', 'союзник', 'колдун']
  }, model, 1);

  await addPlayerCardToBase({
    id: 12,
    name: 'Стирание разума',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1XpGoGXnVA0DbUs0U5txDNpF4wZFMVYAX&sz=w1000',
    cost: 1,
    level: 1,
    attributes: ['mind', 'strength'],
    tags: ['событие', 'заклинание']
  }, model, 1);

  await addPlayerCardToBase({
    id: 13,
    name: 'Книга теней',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1X803GEZ4WquAmPzMvwH848VCy0zZgztp&sz=w1000',
    cost: 4,
    level: 3,
    slot: 'hand',
    attributes: ['mind', 'intelligence'],
    tags: ['доступ', 'предмет', 'книга']
  }, model, 1);

  await addPlayerCardToBase({
    id: 14,
    name: 'Причудливая статуя',
    type: 'mystic',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1Wu3DEXes2CqacXhtTsUSTPcDcCbWG2hl&sz=w1000',
    cost: 2,
    level: 4,
    slot: 'hand',
    attributes: ['universal'],
    tags: ['доступ', 'предмет', 'реликвия']
  }, model, 1);
}

export const addSurvivorPlayerCardsToBase = async(model: Model<SurvivorCard>) => {
  await model.collection.deleteMany({});
  await addPlayerCardToBase({
    id: 1,
    name: 'Бейсбольная бита',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_5v8heKB2B0sEVEzrSLo3I-dN8JEgDI6&sz=w1000',
    cost: 2,
    level: 0,
    slot: 'two-hand',
    attributes: ['strength'],
    tags: ['доступ', 'предмет', 'оружие', 'рукопашное']
  }, model, 1);

  await addPlayerCardToBase({
    id: 2,
    name: 'Скрытый потенциал',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_6wmjvwaMCeB6bZXfuy2dxdd84CS9XgS&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['mind', 'agility'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 3,
    name: 'Подручные средства',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_Gw_-Gv4uTvhXxdcJNINqoM6UI6NXN3Y&sz=w1000',
    cost: 1,
    level: 0,
    attributes: ['intelligence'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 4,
    name: 'Подручные средства',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_NfYdbOtuGMocVR-vCNI7rCYhOZT52RE&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'ally',
    health: '1',
    attributes: ['agility'],
    tags: ['доступ', 'умение']
  }, model, 1);

  await addPlayerCardToBase({
    id: 5,
    name: 'Кожаное пальто',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_KIA57UHjgr1j6ev9rppXgaJU3Uts193&sz=w1000',
    cost: 0,
    level: 0,
    slot: 'dress',
    health: '2',
    attributes: ['strength'],
    tags: ['доступ', 'предмет', 'броня']
  }, model, 1);

  await addPlayerCardToBase({
    id: 6,
    name: 'Кроличья лапка',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_5djeDTHkZ4OtUn_ET0YD_7RzR7ykzq9&sz=w1000',
    cost: 1,
    level: 0,
    slot: 'accessory',
    attributes: ['universal'],
    tags: ['доступ', 'предмет', 'оберег']
  }, model, 1);

  await addPlayerCardToBase({
    id: 7,
    name: 'Смотри, что я нашел!',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_MT-_X19sD8PO5uZDMvvNl5mv5oMlEbQ&sz=w1000',
    cost: 2,
    level: 0,
    attributes: ['intelligence', 'intelligence'],
    tags: ['событие', 'фортуна']
  }, model, 1);

  await addPlayerCardToBase({
    id: 8,
    name: 'Отвлекающий маневр',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_4Umvxo0j8wIzi9N3wEPwPaCeXbOyfZ4&sz=w1000',
    cost: 5,
    level: 0,
    attributes: ['mind', 'universal'],
    tags: ['событие', 'тактика']
  }, model, 1);

  await addPlayerCardToBase({
    id: 9,
    name: 'Повезло!',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_CUSTn11budvBOXmg0Up-IWmQVVnKHCg&sz=w1000',
    cost: 1,
    level: 0,
    tags: ['событие', 'фортуна']
  }, model, 1);

  await addPlayerCardToBase({
    id: 10,
    name: 'Повезло!',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_PEe1al4wABDiODgdYuL9uTobH_Horhq&sz=w1000',
    cost: 1,
    level: 2,
    tags: ['событие', 'фортуна']
  }, model, 1);

  await addPlayerCardToBase({
    id: 11,
    name: 'Инстинкт выживания',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_MDeDpH8xzQDytob-Dt3Yb3yYV1PMQTf&sz=w1000',
    cost: 0,
    level: 0,
    attributes: ['agility'],
    tags: ['навык', 'прирожденный']
  }, model, 1);

  await addPlayerCardToBase({
    id: 12,
    name: 'В последний момент',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_4g27wxhe1jr15moSnHU_njOOqEFz8A2&sz=w1000',
    cost: 2,
    level: 2,
    attributes: ['strength', 'agility'],
    tags: ['событие', 'фортуна']
  }, model, 1);

  await addPlayerCardToBase({
    id: 13,
    name: 'Аквинна',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_GPri3tP05emq8nBfILFK6TlfJOMV4_v&sz=w1000',
    cost: 5,
    level: 1,
    slot: 'ally',
    health: '1',
    mind: 4,
    attributes: ['mind'],
    tags: ['доступ', 'союзник']
  }, model, 1);

  await addPlayerCardToBase({
    id: 14,
    name: 'Желание выжить',
    type: 'survivor',
    backImg: 'https://drive.google.com/thumbnail?id=1VDYXcXVPajHRu2miFlbDxUf2Ka-6aHtM&sz=w1000',
    frontImg: 'https://drive.google.com/thumbnail?id=1_LaVFsx2Pnm1HYDBJ9o-9OSDJjUhprEY&sz=w1000',
    cost: 4,
    level: 3,
    attributes: ['strength', 'universal'],
    tags: ['событие', 'дух']
  }, model, 1);
}

export const addScenariosToBase = async(model: Model<Scenario>) => {
  await model.collection.deleteMany({});
  await model.create(
    {
      id: 1,
      name: 'Ночь фанатички',
      acts: [
        {
          id: 1,
          name: 'Встреча',
          actMemo: {
            frontImg: 'https://drive.google.com/thumbnail?id=1bmIpxfvrNephpq_mxs60SRdSaOXuvw8z&sz=w1000',
            backImg: 'https://drive.google.com/thumbnail?id=1c3p0Hl4pGtmz4L0uyNEIP3-x6rj2ps7m&sz=w1000'
          },
          contacts: ['meet', 'rats', 'ghoules', 'gripped-by-fear', 'ancient-evil', 'piercing-cold'],
          locations: [
            {
              id: 1,
              name: 'Прихожая',
              frontImg: 'https://drive.google.com/thumbnail?id=1iNtCQwHijtCXnuEh-x1ZYaZLwdFMBiRA&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1iFhFLnGGwKwuUtqb_BLK9mFtygTnNoOK&sz=w1000',
              ambiguity: 1,
              clues: '0'
            },
            {
              id: 2,
              name: 'Гостиная',
              frontImg: 'https://drive.google.com/thumbnail?id=1iNV6p98Ith4SeIDMMIbzkKtTi4U_l7A1&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1iYGr24NaohNJO3xEo_B0W6QjPcUMpseX&sz=w1000',
              ambiguity: 2,
              clues: '0'
            },
            {
              id: 3,
              name: 'Кабинет',
              frontImg: 'https://drive.google.com/thumbnail?id=1iHC6MkzDVZBz7G9UFzUGy3ZNYNjRg-G4&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1iH3-HNEDZjSt9CgZ4FEW-wvmO2tdQ23Y&sz=w1000',
              ambiguity: 2,
              clues: '2*players'
            },
            {
              id: 4,
              name: 'Чердак',
              frontImg: 'https://drive.google.com/thumbnail?id=1iXD7Fbt9ReOTUfIdj1iLQ3CXbP_id-9h&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1iO4sUqHyWBCykEII__UWHmKKk7GYEnY6&sz=w1000',
              ambiguity: 1,
              clues: '2*players',
              winPoints: 1
            },
            {
              id: 5,
              name: 'Подвал',
              frontImg: 'https://drive.google.com/thumbnail?id=1i_E6uNykAKk4oVvAmGnCy6lddZqDSihS&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1iUOlZch1sc_0p9r6thZF5_aUCyDeHlt6&sz=w1000',
              ambiguity: 4,
              clues: '2*players',
              winPoints: 1
            }
          ],
          plans: [
            {
              id: 1,
              name: 'Глава 1',
              frontImg: 'https://drive.google.com/thumbnail?id=1j2jlEE27ngL-JvGDml6udlyz7_E8qzM2&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1j5hj6ljvFr-VV2p3h5mN4h4ghAVK0EOO&sz=w1000',
              despair: 3
            },
            {
              id: 2,
              name: 'Глава 2',
              frontImg: 'https://drive.google.com/thumbnail?id=1j0EvlfQewvD6kUma3nvawNtqipTK98af&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1ipqH0Cv9mz74sCfH3p8tDO8dbn0BXUKd&sz=w1000',
              despair: 7
            },
            {
              id: 3,
              name: 'Глава 3',
              frontImg: 'https://drive.google.com/thumbnail?id=1j2SLsSj-3R2WF0IVe6eEf0fxMakTKnRC&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1islZVDnQe6pdXszHfkK7iWUNUd4TFk91&sz=w1000',
              despair: 10
            },
          ],
          scenes: [
            {
              id: 1,
              name: 'Акт 1',
              frontImg: 'https://drive.google.com/thumbnail?id=1idYZFP6P596Y3zP2ScrvpOWa5lW_zs5B&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1ivP2QF6KEHNI2LiIvmhiLKaJSl96XyKm&sz=w1000',
              clues: '2*players'
            },
            {
              id: 2,
              name: 'Акт 2',
              frontImg: 'https://drive.google.com/thumbnail?id=1iqIZCDv44H3bRiL8nC6afj0tMOBiN5qz&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1ifegPdCddxmnI1OGr3rUVhBRGPqatxXM&sz=w1000',
              clues: '3*players'
            },
            {
              id: 3,
              name: 'Акт 3',
              frontImg: 'https://drive.google.com/thumbnail?id=1iyxlmgMIDTs_PkC9VKGFNW-ULO240lEW&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1iebJTOaV91-_MnboM0TxadBy5iJWd1lI&sz=w1000',
              clues: ''
            },
          ]
        },
        {
          id: 2,
          name: 'Полуночные маски',
          actMemo: {
            frontImg: 'https://drive.google.com/thumbnail?id=1STxF3MbGdZoQ26mQlnbucxTabCSIO824&sz=w1000',
            backImg: 'https://drive.google.com/thumbnail?id=1SPaygm7iz7nuN1Yct4w453T8fZAxK513&sz=w1000'
          },
          contacts: ['midnight-masks', 'piercing-cold', 'night-ghosts', 'dark-cult', 'locked-doors'],
          locations: [
            {
              id: 1,
              name: 'Ваш дом',
              frontImg: 'https://drive.google.com/thumbnail?id=1jYz_moV-eEGR2aMXJMJQzueEgYwn-Zaz&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jAefJLdfU-GZdok14CUQ0e6D2FTzS6OP&sz=w1000',
              ambiguity: 2,
              clues: '1*players'
            },
            {
              id: 2,
              name: 'Саутсайд',
              pack: [
                {
                  id: 2,
                  name: 'Саутсайд',
                  frontImg: 'https://drive.google.com/thumbnail?id=1jpSs5M8F9hRDKmp1F-N5KIvfLBFfeVsN&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1je0Rshisg0PvzmDBSQO0JWvVvHFnsmD5&sz=w1000',
                  ambiguity: 3,
                  clues: '1*players'
                }, 
                {
                  id: 3,
                  name: 'Саутсайд',
                  frontImg: 'https://drive.google.com/thumbnail?id=1jpSs5M8F9hRDKmp1F-N5KIvfLBFfeVsN&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1jhr1bFa-qDlHcTBFZzoDepBYWEL_vAEO&sz=w1000',
                  ambiguity: 2,
                  clues: '1*players'
                },
              ]
            },
            {
              id: 4,
              name: 'Даунтаун',
              pack: [
                {
                  id: 4,
                  name: 'Даунтаун',
                  frontImg: 'https://drive.google.com/thumbnail?id=1jTBSOoa7FJK3PX9EqGs05E8fxPQHLKdy&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1jsrKpD_PIYgDxk1eb67kxhikjAT6WCC5&sz=w1000',
                  ambiguity: 3,
                  clues: '1*players'
                },
                {
                  id: 5,
                  name: 'Даунтаун',
                  frontImg: 'https://drive.google.com/thumbnail?id=1jTBSOoa7FJK3PX9EqGs05E8fxPQHLKdy&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1j8YGUewmuXBYkSb7LTl5B-x_zdT5LCwN&sz=w1000',
                  ambiguity: 4,
                  clues: '2*players'
                },
              ]
            },       
            {
              id: 6,
              name: 'Ривертаун',
              frontImg: 'https://drive.google.com/thumbnail?id=1jeoI6ofBUtNbk3PFLVYIUD8rcxu_3dX6&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jNbCDihUUrfwG3iH37DSafZMTKbZelpX&sz=w1000',
              ambiguity: 1,
              clues: '1*players'
            },    
            {
              id: 7,
              name: 'Мискатоникский университет',
              frontImg: 'https://drive.google.com/thumbnail?id=1j9LbAClgfjBRA-am3UNvXtOv6RO0QEFc&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jn-PYHz2JAMSOoYZyvryrJd7RoYJLW4C&sz=w1000',
              ambiguity: 4,
              clues: '2*players'
            },  
            {
              id: 8,
              name: 'Кладбище',
              frontImg: 'https://drive.google.com/thumbnail?id=1jHXaSCzmCRp_QsyV0f11jL7zXVHxYlwf&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jhkfJySnabfA2pnFNDFu9Raimo-W6j5E&sz=w1000',
              ambiguity: 1,
              clues: '2*players'
            },
            {
              id: 9,
              name: 'Исттаун',
              frontImg: 'https://drive.google.com/thumbnail?id=1jAAeN8jnX9biOSvRk8VL9IOg4i_FWeFB&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jiSavMlxzGtSTM5AAAxjaSlymVGjZ-8r&sz=w1000',
              ambiguity: 2,
              clues: '1*players'
            },
            {
              id: 10,
              name: 'Больница Св. Марии',
              frontImg: 'https://drive.google.com/thumbnail?id=1jw8vVzZ3-Tqz0r_thb1Kl2Tie44QoTSO&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jokWGCgj62w80j3jmkh49jlW72NhO6g1&sz=w1000',
              ambiguity: 2,
              clues: '1*players'
            },
            {
              id: 11,
              name: 'Нортсайд',
              frontImg: 'https://drive.google.com/thumbnail?id=1jP7FXTb_4VgylQ6knxTmU7Z0srNQ7y3O&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1jJUXbt2u-UG6YCMqpN9zGPtvlzISUL-g&sz=w1000',
              ambiguity: 3,
              clues: '2*players'
            },
          ],
          plans: [
            {
              id: 1,
              name: 'Глава 1',
              frontImg: 'https://drive.google.com/thumbnail?id=1k9-htzXD1KNdUNdhs_GjpMD-4yjKmAiN&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kAJaRu8QPsCugBTD-yJ86sUsSm_p3mSA&sz=w1000',
              isEnemy: true,
              tags: ['гуманоид', 'культист', 'элитный'],
              appear: 'в зоне угрозы жертвы',
              fight: 3,
              escape: 4,
              healthDmg: 2,
              mindDmg: 1,
              health: 4,
              winPoints: 2,
              despair: 6
            },
            {
              id: 2,
              name: 'Глава 2',
              frontImg: 'https://drive.google.com/thumbnail?id=1k4AIntgGfUlFOyuiJy8vP2p9ncuqbGFY&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1k3OCpCUYpLyLopBW2sFg1yGOYReCDcxM&sz=w1000',
              despair: 8
            },
          ],
          scenes: [
            {
              id: 1,
              name: 'Акт 1',
              frontImg: 'https://drive.google.com/thumbnail?id=1kAs8iIf6pyP3ZzUJOWVywMMMxNARpbib&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1k9FUVvbK3CO-yOOztYPDgG5j5KAU6tan&sz=w1000',
              clues: ''
            },
          ]
        },
        {
          id: 3,
          name: 'Глубинный пожиратель',
          actMemo: {
            frontImg: 'https://drive.google.com/thumbnail?id=1bb40JuSoznJsbaUcWo6S_DijqOkdRDIY&sz=w1000',
            backImg: 'https://drive.google.com/thumbnail?id=1bekq7Ku4frqK56P6Te52R0EupqK4l2h2&sz=w1000'
          },
          contacts: ['depth-devourer', 'ancient-evil', 'gripped-by-fear', 'ghoules', 'dark-cult'],
          locations: [
            {
              id: 1,
              name: 'Основная тропа',
              frontImg: 'https://drive.google.com/thumbnail?id=1kJXDfUqH8F9Ms0KTvaglr9j9ER0YZfRn&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kUbfr47PdGnnD2kO9NqQRZHd41cOCQnM&sz=w1000',
              ambiguity: 2,
              clues: '0'
            },
            {
              id: 2,
              name: 'Аркхэмский лес',
              pack: [
                {
                  id: 2,
                  name: 'Аркхэмский лес',
                  frontImg: 'https://drive.google.com/thumbnail?id=1kQdr2fVbkuBYw6bZcDJEGZHvPymEiXi4&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1kS7N58PivdFH3zs_4m6LFSy3R5H4If8n&sz=w1000',
                  ambiguity: 4,
                  clues: '1*players'
                }, 
                {
                  id: 3,
                  name: 'Аркхэмский лес',
                  frontImg: 'https://drive.google.com/thumbnail?id=1kQdr2fVbkuBYw6bZcDJEGZHvPymEiXi4&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1kLAphr0Lwuo_L_TB3oj3uq5yUHqiQsgs&sz=w1000',
                  ambiguity: 2,
                  clues: '1*players'
                }, 
                {
                  id: 4,
                  name: 'Аркхэмский лес',
                  frontImg: 'https://drive.google.com/thumbnail?id=1kQdr2fVbkuBYw6bZcDJEGZHvPymEiXi4&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1kGwvi-Z2DvQij6_CApa-j_mzSsoF0vpx&sz=w1000',
                  ambiguity: 2,
                  clues: '1*players'
                }, 
                {
                  id: 5,
                  name: 'Аркхэмский лес',
                  frontImg: 'https://drive.google.com/thumbnail?id=1kQdr2fVbkuBYw6bZcDJEGZHvPymEiXi4&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1kFCE-Dp5hO70vENGoxWj2RpKKA7CDrAh&sz=w1000',
                  ambiguity: 3,
                  clues: '1*players'
                }, 
                {
                  id: 6,
                  name: 'Аркхэмский лес',
                  frontImg: 'https://drive.google.com/thumbnail?id=1kQdr2fVbkuBYw6bZcDJEGZHvPymEiXi4&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1kNMLGSp0_rrGAvK0JHk-gwGRIWyA99H_&sz=w1000',
                  ambiguity: 2,
                  clues: '1*players'
                }, 
                {
                  id: 7,
                  name: 'Аркхэмский лес',
                  frontImg: 'https://drive.google.com/thumbnail?id=1kQdr2fVbkuBYw6bZcDJEGZHvPymEiXi4&sz=w1000',
                  backImg: 'https://drive.google.com/thumbnail?id=1kCCQBooWo1--xA902pKq35Ve1NJM_TW1&sz=w1000',
                  ambiguity: 1,
                  clues: '0'
                }, 
              ],
              copies: 4
            },
            {
              id: 8,
              name: 'Основная тропа',
              frontImg: 'https://drive.google.com/thumbnail?id=1kHWHaNmfvAVNDw4P8Vi56Qxq7c6Ti0VO&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kORYxqFdOXdF4ntI6C0Ycy1PqSUrJ3tB&sz=w1000',
              ambiguity: 3,
              clues: '2*players'
            },
          ],
          plans: [
            {
              id: 1,
              name: 'Глава 1',
              frontImg: 'https://drive.google.com/thumbnail?id=1kVhTffxGyCslFfjRpNHu2AHnC5g_h4GI&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kZ-I_W1qwg4ziQTZ_HIDZY_591BuhO0n&sz=w1000',
              despair: 4
            },
            {
              id: 2,
              name: 'Глава 2',
              frontImg: 'https://drive.google.com/thumbnail?id=1kad2tUP5uNlgsBbXd28Nd_Xg7K4NXu39&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1krUNSzMtnE6IXszNCfWrjGbXkUEyyPZD&sz=w1000',
              despair: 5
            },
            {
              id: 3,
              name: 'Глава 3',
              frontImg: 'https://drive.google.com/thumbnail?id=1knqW3K1jWSAkxoWdjL9XLU7o3brZSQOj&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kkZ3BiLkf9Px_1P4APfDP9sQVdCf8kJN&sz=w1000',
              despair: 5
            },
          ],
          scenes: [
            {
              id: 1,
              name: 'Акт 1',
              frontImg: 'https://drive.google.com/thumbnail?id=1ktCViv7eV64EBESq1OAnN2wQkmCWm8xb&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kmvgwjcqSX09WWeuENrd4M7WGTv1Ftnv&sz=w1000',
              clues: '3*players'
            },
            {
              id: 2,
              name: 'Акт 2',
              frontImg: 'https://drive.google.com/thumbnail?id=1kaRSewgK9K7EqNSDytk3t0BEdb83ysjW&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kWoOUfiiALZaE3zYbB7LQ8rokA1iWjC1&sz=w1000',
              clues: ''
            },
            {
              id: 3,
              name: 'Акт 3',
              frontImg: 'https://drive.google.com/thumbnail?id=1kthh3pdWVcoFdFbY8SmzlfHDo54BXBo-&sz=w1000',
              backImg: 'https://drive.google.com/thumbnail?id=1kpCsbmTH-Lc9sWB_3HpVQZQLswSTzZeR&sz=w1000',
              clues: ''
            }
          ]
        },
      ],
      specialCards: [
        {
          id: 1,
          name: 'Умордхот',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1hpt-gh9T6e_IGfM-_Jg26o6pK3hVOHM4&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['древний', 'элитный', 'охотник', 'большой'],
          isEnemy: true,
          healthDamage: 3,
          mindDamage: 3,
          fight: 5,
          health: '6+4*players',
          escape: 6
        },
        {
          id: 2,
          name: 'Лита Чантлер',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1dCHArzemSPIzM2WrkzOYt3rURiebxBZM&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1ZrvUlL2Z70l-qL_RbrmBnsFSWZSnh91g&sz=w1000',
          cost: 0,
          level: 0,
          slot: 'ally',
          tags: ['союзник'],
          health: '3',
          mind: 3
        },
        {
          id: 3,
          name: '"Человек-волк" Дрю',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1hwfLsWM8EeFtBz3bScMH4mFjzW-SOHMo&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['гуманоид', 'культист'],
          isEnemy: true,
          appear: 'Даунтаун',
          winPoints: 1,
          healthDamage: 2,
          fight: 4,
          health: '4',
          escape: 2
        },
        {
          id: 4,
          name: 'Герман Коллинс',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1i1JhuW0AB-RGkV7Hry6HhQvXvrrJo_gW&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['гуманоид', 'культист'],
          isEnemy: true,
          appear: 'Кладбище',
          winPoints: 1,
          healthDamage: 1,
          mindDamage: 1,
          fight: 3,
          health: '4',
          escape: 4
        },
        {
          id: 5,
          name: 'Упырь-жрец',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1hqvfthrUMyJyYKOGm4UF1rq3-pMSA0sq&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['гуманоид', 'монстр',  'упырь', 'элитный', 'охотник', 'мстительный'],
          isEnemy: true,
          appear: 'сильнейший',
          winPoints: 2,
          healthDamage: 2,
          mindDamage: 2,
          fight: 4,
          health: '5*players',
          escape: 4
        },
        {
          id: 6,
          name: 'Питер Варрен',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1htpnXWLDHj1d3yIFVy1FisaGjdaOExqD&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['гуманоид', 'культист', 'мискатоник'],
          isEnemy: true,
          appear: 'Мискатоникский университет',
          winPoints: 1,
          healthDamage: 1,
          fight: 2,
          health: '3',
          escape: 3
        },
        {
          id: 7,
          name: 'Рут Тёрнер',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1hwd7S6-4vMEWtVSWoXPtm8lXdecVL9Yd&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['гуманоид', 'культист'],
          isEnemy: true,
          appear: 'Больница Св. Марии',
          winPoints: 1,
          healthDamage: 1,
          fight: 2,
          health: '4',
          escape: 5
        },
        {
          id: 8,
          name: 'Виктория Деверо',
          type: 'special',
          frontImg: 'https://drive.google.com/thumbnail?id=1i-zwu7__Y0_Oci8S-RNI1I5LFNEeUGPF&sz=w1000',
          backImg: 'https://drive.google.com/thumbnail?id=1_QtpIiopWLAHvUiK8akF5dit09-68pGf&sz=w1000',
          tags: ['гуманоид', 'культист'],
          isEnemy: true,
          appear: 'Нортсайд',
          healthDamage: 1,
          fight: 3,
          health: '3',
          escape: 2
        },
      ]
    }
  );
}
