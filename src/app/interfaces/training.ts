export interface Training {
  weekday: string;
  calories: number;
  time: number;
  activities: Activity[];
}

export interface Activity {
  title: string;
  bodyArea: string;
  duration: string;
  startAt: string;
  calories: number;
}
