export enum CrewIconColors {
  BANANA = 'banana',
  BLACK = 'black',
  BLUE = 'blue',
  BROWN = 'brown',
  CORAL = 'coral',
  CYAN = 'cyan',
  GRAY = 'gray',
  GREEN = 'green',
  LIME = 'lime',
  MAROON = 'maroon',
  ORANGE = 'orange',
  PINK = 'pink',
  PURPLE = 'purple',
  RED = 'red',
  ROSE = 'rose',
  TAN = 'tan',
  WHITE = 'white',
  YELLOW = 'yellow'
}

export enum Status {
  NONE = 'none',
  LIVE = 'live',
  DEAD = 'dead'
}

export enum Maps {
  SKELD = 'skeld',
  MIRA_HQ = 'mira_hq',
  POLUS = 'polus',
  AIRSHIP = 'airship'
}

export const MapItems = [
  { id: Maps.SKELD, label: 'Skeld' },
  { id: Maps.MIRA_HQ, label: 'MiraHQ' },
  { id: Maps.POLUS, label: 'POLUS' },
  { id: Maps.AIRSHIP, label: 'Airship' }
]

export enum FOUND_GROUP {
  TIMELINE = '議論',
  SABOTAGE = 'サボタージュ',
  ROOM = '部屋',
  PASSAGE = '通路'
}

export const Timeline = [
  { id: 'emergency', label: 'ボタン' },
  { id: 'report', label: 'レポート' },
  { id: 'safety', label: '白位置' },
  { id: 'accused', label: '容疑者' },
  { id: 'unwatch', label: '浮き位置' },
  { id: 'pair', label: 'ライン' }
]

export const Sabotage = [
  { id: 'meltdown-left', label: 'リアクター(左)' },
  { id: 'meltdown-right', label: 'リアクター(右)' },
  { id: 'blackout', label: '停電' },
  { id: 'coms-sabotage', label: '通信妨害' },
  { id: 'o2-sabotage1', label: '酸素枯渇(1)' },
  { id: 'o2-sabotage2', label: '酸素枯渇(2)' }
]

export const  SkeldRooms = [
  { id: 'cafeteria', label: 'カフェテリア' },
  { id: 'admin', label: 'アドミン' },
  { id: 'weapon', label: '武器庫' },
  { id: 'o2-room', label: '酸素室' },
  { id: 'navigation', label: 'ナビゲーション' },
  { id: 'medbay', label: 'メッドベイ' },
  { id: 'upper_engine', label: 'アッパーエンジン' },
  { id: 'reactor', label: 'リアクター室' },
  { id: 'security', label: 'セキュリティ' },
  { id: 'lower_engine', label: 'ロワーエンジン' },
  { id: 'electrical', label: 'エレクトリカル' },
  { id: 'storage', label: 'ストレージ' },
  { id: 'shield', label: 'シールド' },
  { id: 'communication', label: 'コミュニケーション' },
]

export const SkeldPassages = [
  { id: 'medbay_front', label: 'メッドベイ前' },
  { id: 'reactor_front', label: 'リアクター前' },
  { id: 'electrical_front', label: 'エレクトリカル前' },
  { id: 'admin_front', label: 'アドミン前' },
  { id: 'navigation_front', label: 'ナビゲーション前' }
]

export const MiraHQRooms = []

export const MiraHQPassages = []

export const PolusRooms = []

export const PolusPassages = []

export const AirshipRooms = [
  { id: 'meeting', label: 'ミーティングルーム' },
  { id: 'lift_left', label: '昇降機(左)' },
  { id: 'lift_right', label: '昇降機(右)' },
  { id: 'dorm', label: '宿舎前通路' },
  { id: 'vault', label: '金庫室' },
  { id: 'engineroom', label: 'エンジンルーム' },
  { id: 'mainhall', label: 'メインホール' },
  { id: 'comunication', label: '通信室' },
  { id: 'cockpit', label: 'コックピット' },
  { id: 'weapon', label: '武器庫' },
  { id: 'kitchen', label: 'キッチン' },
  { id: 'deck', label: '展望デッキ' },
  { id: 'archive', label: 'アーカイブ' },
  { id: 'shower', label: 'シャワー室' },
  { id: 'lounge', label: 'ラウンジ' },
  { id: 'cargo', label: '貨物室' },
  { id: 'medbay', label: '診察室' },
  { id: 'electrical', label: '電気室' },
  { id: 'security', label: 'セキュリティ' }
]

export const AirshipPassages = [
  { id: 'engine_side', label: 'エンジンの上' },
  { id: 'comunication_side', label: '通信室の前' },
  { id: 'security_side', label: 'セキュリティの左' },
  { id: 'shower_side', label: 'シャワー室の右' },
  { id: 'cargo_side', label: '貨物室の左' },
]
