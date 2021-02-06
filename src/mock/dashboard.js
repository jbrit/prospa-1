import bank from '../assets/images/bankIcon.png';
import invoice from '../assets/images/invoice.png';
import transfer from '../assets/images/transfer.png';
import support from '../assets/images/support.png';
import greenCard from '../assets/images/green-card.svg';
import purpleCard from '../assets/images/purple-card.svg';

export const sideBarData = [
  {
    name: 'account',
    icon: bank,
  },
  {
    name: 'Tranfer',
    icon: transfer,
  },
  {
    name: 'invoice',
    icon: invoice,
  },
  {
    name: 'Management',
    icon: support,
  },
  {
    name: 'security',
    icon: support,
  },
  {
    name: 'support',
    icon: support,
  },
];

export const AccountDetails = [
  {
    type: 'CURRENT ACCOUNT',
    details: 'PROVIDUS BANK - 9906533917',
    icon: purpleCard,
    amount: 'N814,800',
    kobo: '.45',
  },
  {
    type: 'SAVINGS ACCOUNT',
    details: 'SUB ACCOUNT - 12346789',
    icon: greenCard,
    amount: 'N39,342',
    kobo: '.45',
  },
];
