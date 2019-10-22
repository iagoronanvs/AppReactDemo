import React, { useEffect, useState } from 'react';

import { ActivityIndicator, ScrollView } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import { useDispatch, useSelector } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Option, OptionInfo, OptionText, ContainerLoading, LoadingText, SearchInput, ContainerSearch, SearchButton, Header, HeaderText, Title, Description, Price, PriceContainer, Locate, LocateText } from './styles/MenuScreen';

import { getToken, searchDrugs, drugDetails, initState, getPharmacies, switchForm } from '../../../actions/RxsenseActions';

export default function MenuScreen() {
  const dispatch = useDispatch();
  const token = useSelector(store => store.RxsenseReducer.token);
  const level = useSelector(store => store.RxsenseReducer.level);
  const index = useSelector(store => store.RxsenseReducer.index);
  const drugs = useSelector(store => store.RxsenseReducer.drugs);
  const details = useSelector(store => store.RxsenseReducer.details);
  const loading = useSelector(store => store.RxsenseReducer.loading);
  const [local, setLocal] = useState(null);


  const [search, setSearch] = useState([]);

  useEffect(() => {
    dispatch(getToken());

    Geolocation.getCurrentPosition(info => setLocal({ latitude: info.coords.latitude, longitude: info.coords.longitude }));
  }, []);

  return (
    <>
      {loading && (
        <ContainerLoading>
          <ActivityIndicator />
          <LoadingText>Loading...</LoadingText>
        </ContainerLoading>
      )}

      {!loading && (
        <>
          <ContainerSearch>
            <SearchInput placeholder="Prescription..." onChangeText={value => { setSearch(value); }} />
            <SearchButton onPress={() => { dispatch(searchDrugs( token, search )) }}>
              <Icon name="search" size={25} />
            </SearchButton>
          </ContainerSearch>

          <ScrollView>
            {level == 0 && drugs && drugs.length > 0 && drugs.map((drug, i) => (
              <Option key={i} onPress={() => { dispatch(drugDetails( token, drug.ndc )) }}>
                <OptionText>{drug.display_name}</OptionText>
                <Icon name="keyboard-arrow-right" size={25} />
              </Option>
            ))}

            {level == 1 && details && details.length > 0 && details.map((detail, i) => (
              <Option key={i} onPress={() => { console.log(details[i]); dispatch(switchForm(i)); }}>
                <OptionText>{detail.Key}</OptionText>
                <Icon name="keyboard-arrow-right" size={25} />
              </Option>
            ))}

            {level == 2 && details[index].Value && details[index].Value.length > 0 && details[index].Value.map((detail, i) => (
              <Option key={i} onPress={() => { console.log(details[index].Value[i]) }}>
                <OptionText>{detail.Key}</OptionText>
                <Icon name="keyboard-arrow-right" size={25} />
              </Option>
            ))}



            {/* <Container>
              {details && (
                <>
                  <Title>{details.Drug.FullName}</Title>
                  {details.Drug.Description !=  '' && (<Description>{details.Drug.Description}</Description>)}
                  <PriceContainer>
                    <Icon name="monetization-on" size={30} />
                    <Price>{details.Drug.PriceUsualAndCustomary}</Price>
                  </PriceContainer>
                  <Locate>
                    <LocateText>Localizar</LocateText>
                  </Locate>
                </>
              )}
            </Container> */}
          </ScrollView>
        </>
      )}
    </>
  );
}


/*
{details && details.length > 0 && details.map((detail, i) => (
              <>
                {detail && detail.Value.length > 0 && detail.Value.map((detail_a, j) => (
                <>
                  {detail_a && detail_a.Value.length > 0 && detail_a.Value.map((detail_b, k) => (
                    <>
                      <Header>
                        <HeaderText>{detail.Key} {detail_a.Key} {detail_b.Key}</HeaderText>
                      </Header>
                    {detail_b && detail_b.Value.length > 0 && detail_b.Value.map((detail_c, l) => {
                      return (
                        <Option key={l} onPress={() => { Actions.pharmacies({ drug: detail_c, local }) }}>
                          <OptionInfo>
                            <OptionText>Quantity: {detail_c.Value.Quantity}</OptionText>
                            <OptionText>$ {detail_c.Value.PriceUsualAndCustomary}</OptionText>
                          </OptionInfo>
                          <Icon name="keyboard-arrow-right" size={25} />
                        </Option>
                      )
                    } )}
                    </>
                  ))}
                </>
                ))}
              </>
              ))}
*/
