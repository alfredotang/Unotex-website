import React, { Component } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0, 3, 3, 0);
  width: 120%;
  height: 9em;
  z-index: 2;
  position: relative;
  left: -10px;
  top: -10px;
  padding: 0.75em;
  box-sizing: border-box;
  position: fixed;
  &:hover {
    background: rgba(0, 3, 3, 0.4);
  }
`;

export const Menu = styled.div`
  list-style: none;
  position: relative;
  float: left;
  top: -3em;
  left: 32em;
`;

export const A = styled.a`
  color: white;
  font-size: 1em;
  position: relative;
  margin-left: 1em;

  &:hover {
    color: #aeaca6;
  }
  &:vistied {
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`;
