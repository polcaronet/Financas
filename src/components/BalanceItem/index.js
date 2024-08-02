import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }) {

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return {
        label: 'Saldo atual',
        color: '#3B3DBF'
      }
    } else if(data.tag === 'receita'){
      return {
        label: 'Entradas de hoje',
        color: '#00B94A'
      }
    } else {
      return {
        label: 'Saídas de hoje',
        color: '#EF463A'
      }
    }
  }, [data])

  return (
    <Container bg={labelName.color}>
     <Label>{labelName.label}</Label>
      <Balance>{data.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Balance>
    </Container>
  );
}



