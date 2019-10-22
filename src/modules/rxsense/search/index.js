import React, { useState, useEffect } from 'react';

import { ActivityIndicator, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ContainerSearch,
  SearchInput,
  SearchButton,
  ContainerLoading,
  LoadingText,
  Option,
  OptionText
} from './styles';

import { request } from '../../../Api';

import * as Constants from '../../../util/Constants';
import { Actions } from 'react-native-router-flux';

export default function search() {

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [drugs, setDrugs] = useState([]);
  const [search, setSearch] = useState('');

  function getToken() {
    setLoading(true);

    request
    .get(Constants.GET_RXSENSE_TOKEN)
    .then(response => {
      console.log(response.data.Token);
      setToken(response.data.Token);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }

  function searchDrugs() {
    setLoading(true);

    request
    .post(Constants.POST_RXSENSE_DRUGS, { token, search })
    .then(response => {

      console.log(response.data);
      setLoading(false);
      if (response.data.message == 'Unauthorized') {
        alert('Atenção! Não foi possível realizar a busca.')
      }else{
        setDrugs(response.data);
      }
    })
    .catch(error => {
        console.log(error);
        setLoading(false);
    });
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <ContainerSearch>
        <SearchInput placeholder="Prescription..." onChangeText={value => { setSearch(value); }} />
        <SearchButton onPress={searchDrugs}>
          <Icon name="search" size={25} />
        </SearchButton>
      </ContainerSearch>

      {loading && (
        <ContainerLoading>
          <ActivityIndicator />
          <LoadingText>Loading...</LoadingText>
        </ContainerLoading>
      )}

      <ScrollView>
      {drugs && drugs.length > 0 && drugs.map((drug, i) => (
        <Option key={i} onPress={() => { Actions.details({ drug }) }}>
          <OptionText>{drug.display_name}</OptionText>
          <Icon name="keyboard-arrow-right" size={25} />
        </Option>
      ))}
      </ScrollView>

    </>
  );
}
