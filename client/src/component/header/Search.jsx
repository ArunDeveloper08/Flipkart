import React from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/action/productAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius:3px;
margin-left:10px;
display:flex;
`;

const InputSerachBase = styled(InputBase)`
Padding-left:20px;
width: 100%;
font-size:unset;
`;
const SearchIconWrapper = styled(SearchIcon)`
color:#2874f0;
padding:5px;
display:flex; 
`;

const ListWrapper = styled(List)`
position:absolute;
background:#fff;
color: #000;
margin-top:36px;
text-decoration:none;
`

const Search = () => {
  const [text, setText] = React.useState('');
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value)
  };

  React.useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <SearchContainer>
      <InputSerachBase placeholder="Search for Products , brands and  more" onChange={handleChange} value={text}/>
      <Box>
        <SearchIconWrapper />
      </Box>
      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
              return (
                <>
                  <ListItem>
                    <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none', color:"#000"}}>
                    {
                      product.title.longTitle
                    }
                    </Link>
                  </ListItem>
                </>
              )
            })
          }

        </ListWrapper>
      }
    </SearchContainer>
  )
}

export default Search;