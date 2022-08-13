/* ResponseCode */
export enum ResponseCode {
  SUCCESS = 200,
}

/* ResponseMessage */
export const ResponseMessage: Record<ResponseCode, string> = {
  [ResponseCode.SUCCESS]: 'SUCCESS',
};
