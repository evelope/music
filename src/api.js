/**
 * api 都集中在这里
 * */
import {
  sendAll,
  sendDelete,
  sendGet,
  sendPost,
  sendPut,
  sendPatch,
  sendJsonp
} from "@/utils/httpAxios.js";

// 云音乐热歌 排行榜
export const getSongList = (data) => sendGet("/music/netease/songList", data);