export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_COLOR = 'CHANGE_COLOR';


export interface Expense {
  setImage : string
  sizes : {
      name: string,
      size: string
  }[],
  colors : {
      name: string,
      img: string
  }[]

}
export interface changeimagetype {
  type :typeof CHANGE_IMAGE,
  payload : string
}
export interface clickedtype {
  type :typeof CHANGE_COLOR,
  payload : string
}





// export const CHANGE_IMAGE = 'SEND_MESSAGE'




