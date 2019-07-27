import { React } from 'react';
import { AsyncStorage } from 'react-native';

export default class StorageHelper {
	
	async _sh(key){
    	return await AsyncStorage.getItem(key);
  	}

  	get(key) {
    	let shItem = this._sh(key).then((item) => {
      		return item;
    	});
  	}

} 