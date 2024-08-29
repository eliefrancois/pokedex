export interface Result {
    count: number;
    next: string;
    previous: null;
    results: Pokemon[];
  }
  
  export interface Pokemon {
    name: string;
    url: string;
    image: string;
    id: string;
    abilities: Ability2[];
    base_experience: number;
    cries: Cries
    forms: Ability[];
    game_indices: Gameindex[];
    height: number;
    held_items: any[];
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Ability;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
  
  export interface Type {
    slot: number;
    type: Ability;
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: Ability;
  }
  
  export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: Other;
    versions: Versions;
  }
  
  export interface Versions {
    'generation-i': Generationi;
    'generation-ii': Generationii;
    'generation-iii': Generationiii;
    'generation-iv': Generationiv;
    'generation-v': Generationv;
    'generation-vi': Generationvi;
    'generation-vii': Generationvii;
    'generation-viii': Generationviii;
  }
  
  export interface Generationviii {
    icons: Dreamworld;
  }
  
  export interface Generationvii {
    icons: Dreamworld;
    'ultra-sun-ultra-moon': Home;
  }
  
  export interface Generationvi {
    'omegaruby-alphasapphire': Home;
    'x-y': Home;
  }
  
  export interface Generationv {
    'black-white': Blackwhite;
  }
  
  export interface Blackwhite {
    animated: Showdown;
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  }
  
  
  interface Generationiv {
    'diamond-pearl': Showdown;
    'heartgold-soulsilver': Showdown;
    platinum: Showdown;
  }
  
  interface Generationiii {
    emerald: Officialartwork;
    'firered-leafgreen': Fireredleafgreen;
    'ruby-sapphire': Fireredleafgreen;
  }
  
  interface Fireredleafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }
  
  interface Generationii {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
  }
  
  interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }
  
  interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  }
  
  interface Generationi {
    'red-blue': Redblue;
    yellow: Redblue;
  }
  
  interface Redblue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }
  
  interface Other {
    dream_world: Dreamworld;
    home: Home;
    'official-artwork': Officialartwork;
    showdown: Showdown;
  }
  
  interface Showdown {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  }
  
  interface Officialartwork {
    front_default: string;
    front_shiny: string;
  }
  
  interface Home {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  }
  
  interface Dreamworld {
    front_default: string;
    front_female: null;
  }
  
  interface Move {
    move: Ability;
    version_group_details: Versiongroupdetail[];
  }
  
  interface Versiongroupdetail {
    level_learned_at: number;
    move_learn_method: Ability;
    version_group: Ability;
  }
  
  interface Gameindex {
    game_index: number;
    version: Ability;
  }
  
  interface Cries {
    latest: string;
    legacy: string;
  }
  
  interface Ability2 {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
  }
  
  interface Ability {
    name: string;
    url: string;
  }