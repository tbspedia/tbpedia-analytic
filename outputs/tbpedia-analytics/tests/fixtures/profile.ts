import type {ReaderProfile} from '../../shared/schema';
export const completeProfile=():ReaderProfile=>({nickname:'Test reader',email:'reader@example.com',birth_year:1980,birth_month:8,sex:'PREFER_NOT_TO_SAY',country_code:'MY',reader_type:['GENERAL'],organisation:'Reading group'});
