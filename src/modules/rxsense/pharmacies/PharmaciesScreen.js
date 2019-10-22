import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import SvgUri from 'react-native-svg-uri';

import { getPharmacies } from '../../../actions/RxsenseActions';

import { Container, Item, ItemText, Logo, Info, Name, ContainerLoading, LoadingText } from './styles/PharmaciesScreen';

export default function PharmaciesScreen( props ) {
  const token = useSelector(store => store.RxsenseReducer.token);
  const loading = useSelector(store => store.RxsenseReducer.loading);
  const pharmacies = useSelector(store => store.RxsenseReducer.pharmacies);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props);
    console.log(token);
    dispatch(getPharmacies(token, props.drug.Value.NDC, props.drug.Value.Quantity, props.local.latitude, props.local.longitude ));
  }, []);

  return (
    <Container>

      {loading && (
        <ContainerLoading>
          <ActivityIndicator />
          <LoadingText>Aguarde...</LoadingText>
        </ContainerLoading>
      )}

      {!loading && pharmacies && pharmacies.length > 0 && pharmacies.map( (p,i) => (

        <Item key={i}>
          <Info>
            <Name>{p.Pharmacy.Name}</Name>
            <ItemText>{p.Pharmacy.Address.Address1}</ItemText>
            <ItemText>{p.Pharmacy.Address.City} - {p.Pharmacy.Address.State}</ItemText>
          </Info>
        </Item>

      ))}

    </Container>
  );
}
