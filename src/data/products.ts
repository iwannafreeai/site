export type ProductCategory = "tesma" | "rezinka" | "shnury";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  material: string;
  width?: string;
  length?: string;
  colors: string[];
  composition: string;
  minOrder: string;
  image: "tesma" | "rezinka" | "shnur";
}

export const categoryLabels: Record<ProductCategory, string> = {
  tesma: "Тесьма",
  rezinka: "Резинка",
  shnury: "Шнуры",
};

export const categoryDescriptions: Record<ProductCategory, string> = {
  tesma:
    "Окантовочная, отделочная и декоративная тесьма для швейного и обувного производства.",
  rezinka:
    "Тканые и плетёные эластичные ленты различной ширины и плотности для лёгкой и трикотажной промышленности.",
  shnury:
    "Шнуры вязаные, плетёные и витые из синтетических и натуральных волокон для разных отраслей.",
};

export const products: Product[] = [
  {
    id: "tesma-okant-15",
    slug: "tesma-okantovochnaya-15mm",
    name: "Тесьма окантовочная 15 мм",
    category: "tesma",
    shortDescription:
      "Мягкая окантовка для обработки срезов трикотажа и тканей средней плотности.",
    description:
      "Окантовочная тесьма используется для аккуратной обработки срезов изделий из трикотажа, флиса, плащёвки и хлопка. Эластичная структура легко повторяет изгибы кроя и сохраняет форму после стирки.",
    material: "Полиэстер 100%",
    width: "15 мм",
    length: "200 м в рулоне",
    colors: ["Белый", "Чёрный", "Серый", "Бежевый", "Тёмно-синий"],
    composition: "ПЭ 100%",
    minOrder: "от 5 рулонов",
    image: "tesma",
  },
  {
    id: "tesma-otdel-20",
    slug: "tesma-otdelochnaya-20mm",
    name: "Тесьма отделочная 20 мм",
    category: "tesma",
    shortDescription:
      "Плотная декоративная тесьма для одежды, аксессуаров и интерьерного текстиля.",
    description:
      "Прочная отделочная тесьма с гладкой лицевой стороной. Подходит для оформления штор, форменной одежды, сумок и рабочих изделий. Устойчива к разрывам и истиранию.",
    material: "Полиэстер с добавлением хлопка",
    width: "20 мм",
    length: "100 м в рулоне",
    colors: ["Белый", "Чёрный", "Красный", "Зелёный", "Жёлтый"],
    composition: "ПЭ 70% / Хлопок 30%",
    minOrder: "от 3 рулонов",
    image: "tesma",
  },
  {
    id: "tesma-deko-30",
    slug: "tesma-dekorativnaya-30mm",
    name: "Тесьма декоративная 30 мм",
    category: "tesma",
    shortDescription:
      "Широкая фасонная тесьма для творчества, упаковки и текстильного декора.",
    description:
      "Декоративная тесьма с фактурной поверхностью. Применяется при производстве сувениров, праздничной упаковки, домашнего текстиля и в рукоделии.",
    material: "Полиэстер",
    width: "30 мм",
    length: "50 м в рулоне",
    colors: ["Золотистый", "Серебряный", "Бордо", "Бирюзовый"],
    composition: "ПЭ 100%",
    minOrder: "от 5 рулонов",
    image: "tesma",
  },
  {
    id: "rezinka-flat-8",
    slug: "rezinka-bel-8mm",
    name: "Резинка бельевая 8 мм",
    category: "rezinka",
    shortDescription:
      "Эластичная плоская резинка для пояса, манжет и трикотажных изделий.",
    description:
      "Мягкая бельевая резинка средней плотности. Хорошо тянется и быстро восстанавливает форму, не вызывает раздражения кожи. Подходит для пошива нижнего белья, домашней одежды и детских изделий.",
    material: "Латексные нити в оплётке из ПЭ",
    width: "8 мм",
    length: "100 м",
    colors: ["Белый", "Чёрный"],
    composition: "Латекс 30% / ПЭ 70%",
    minOrder: "от 10 рулонов",
    image: "rezinka",
  },
  {
    id: "rezinka-flat-25",
    slug: "rezinka-tkanaya-25mm",
    name: "Резинка тканая 25 мм",
    category: "rezinka",
    shortDescription:
      "Плотная тканая резинка для брюк, спортивной и рабочей одежды.",
    description:
      "Прочная тканая резинка с высокой стабильностью растяжения. Сохраняет упругость после многократных стирок, не скручивается в шве. Применяется в производстве спортивной формы и спецодежды.",
    material: "Латекс + полиэстер",
    width: "25 мм",
    length: "50 м",
    colors: ["Чёрный", "Тёмно-синий", "Серый"],
    composition: "Латекс 40% / ПЭ 60%",
    minOrder: "от 5 рулонов",
    image: "rezinka",
  },
  {
    id: "rezinka-round-3",
    slug: "rezinka-kruglaya-3mm",
    name: "Резинка круглая 3 мм",
    category: "rezinka",
    shortDescription: "Круглая эластичная резинка для масок, шапочек и сборок.",
    description:
      "Тонкая круглая резинка с равномерным сечением. Применяется в производстве медицинских масок, головных уборов, чехлов и одежды со сборками. Минимальная усадка после намокания.",
    material: "Латекс с полиэфирной оплёткой",
    width: "3 мм",
    length: "500 м",
    colors: ["Белый", "Чёрный"],
    composition: "Латекс 30% / ПЭ 70%",
    minOrder: "от 20 рулонов",
    image: "rezinka",
  },
  {
    id: "shnur-poli-4",
    slug: "shnur-polipropilenovyy-4mm",
    name: "Шнур полипропиленовый 4 мм",
    category: "shnury",
    shortDescription:
      "Лёгкий и влагостойкий шнур для упаковки и хозяйственных нужд.",
    description:
      "Полипропиленовый плетёный шнур со стабильным диаметром. Устойчив к воздействию воды, бытовой химии и ультрафиолета. Используется в упаковке, садоводстве, рекламной продукции.",
    material: "Полипропилен",
    width: "Ø 4 мм",
    length: "200 м",
    colors: ["Белый", "Чёрный", "Красный", "Синий"],
    composition: "ПП 100%",
    minOrder: "от 5 бухт",
    image: "shnur",
  },
  {
    id: "shnur-cotton-5",
    slug: "shnur-hlopkovyy-5mm",
    name: "Шнур хлопковый 5 мм",
    category: "shnury",
    shortDescription: "Натуральный хлопковый шнур для одежды, сумок и декора.",
    description:
      "Мягкий шнур из 100% хлопка. Приятный на ощупь, легко окрашивается и хорошо завязывается в декоративные узлы. Часто используется в производстве худи, спортивной одежды и эко-упаковки.",
    material: "Хлопок",
    width: "Ø 5 мм",
    length: "100 м",
    colors: ["Натуральный", "Белый", "Чёрный", "Бежевый"],
    composition: "Хлопок 100%",
    minOrder: "от 3 бухт",
    image: "shnur",
  },
  {
    id: "shnur-nylon-6",
    slug: "shnur-neylonovyy-6mm",
    name: "Шнур нейлоновый 6 мм",
    category: "shnury",
    shortDescription:
      "Прочный плетёный шнур для обуви, рюкзаков и снаряжения.",
    description:
      "Высокопрочный нейлоновый шнур с плотной плетёной структурой. Отличается износостойкостью и стабильным диаметром, подходит для производства шнурков, ручек сумок и туристического снаряжения.",
    material: "Нейлон",
    width: "Ø 6 мм",
    length: "100 м",
    colors: ["Чёрный", "Хаки", "Серый", "Тёмно-синий"],
    composition: "Полиамид 100%",
    minOrder: "от 5 бухт",
    image: "shnur",
  },
];

export const featuredProducts = products.filter((_, i) =>
  [0, 3, 6].includes(i),
);
