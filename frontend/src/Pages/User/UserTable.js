import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import TocIcon from '@material-ui/icons/Toc';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import FormCard from './FormCard.js';

export default function UserTable(props){
  const [table, setTable] = React.useState({
    columns: [],
    rows: [],
    selectedColumns: [],
    defaultColumns: [],
    anchorSelect: null,
    tab: 0,
    search: '',
    page: 0,
    perPage: 5,
    perPageOptions: [5, 10, 25, 100]
  })
  const changeTab=(event, newTab)=>{setTable({...table, tab: newTab})};
  const changePage=(event, newPage)=>{setTable({...table, page: newPage})};
  const changePerPage=(event)=>{setTable({...table, page: 0, perPage: +event.target.value})};
  const changeSearch=(event)=>{setTable({...table, search: event.target.value})};
  const openSelect=(event)=>{setTable({...table, anchorSelect: event.currentTarget})}
  const closeSelect=()=>{setTable({...table, anchorSelect: null})}
  const resetColumns=()=>{setTable({...table, selectedColumns: table.defaultColumns})}
  function changeSelectedColumns(i){
    let newSelected = table.selectedColumns
    newSelected[i] = !newSelected[i]
    setTable({...table, selectedColumns: newSelected})
  }
  const showResetButton=()=>{
    for (var i = 0; i < table.selectedColumns.length; ++i) {
      if(table.selectedColumns[i] !== table.defaultColumns[i]){
        // console.log(table.selectedColumns[i],table.defaultColumns[i])
        // return false
      }
      else{
        // console.log(table.selectedColumns[i],table.defaultColumns[i])
        // return false
      }
    }
    return true;
  }
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get('/forms')
      .then(function (response) {
        alert("Sucess");
      })
      .catch(function (error) {
        let rows = props.example.rows;
        let columns =  props.example.columns;
        let favs = 0;
        for(let i=0; i<rows.length; i++){
          if(rows[i].favorite){
            favs++
          }
        }
        let defaultColumns = columns.filter(function(row){return row.default})
        setTable({...table, columns: columns, selectedColumns: defaultColumns, defaultColumns: defaultColumns, rows: rows, favorites: favs})
        // props.setAlert({open: true, text: "Error in fetching rows", severity: "error"})
      })
    }
    const fetchUser = async () => {
      props.setControl({...props.control, user: props.example.users[props.control.user.username]});
    }
    fetchData();
    fetchUser();
  }, [props.example]);
  function handleFavorite(row){
    // Make the API call
    let userFavorites = props.control.user.favorites;
    let index = userFavorites.indexOf(row.id);
    if(index===-1){
      userFavorites.push(row.id)
    }
    else{
      userFavorites.splice(index, 1)
    }
    let newUsers = props.example.users;
    newUsers[props.control.user.username].favorites = userFavorites;
    props.setExample({...props.example, users: newUsers})
  }
  function textTab(){
    switch(table.tab){
      case 1: return 'Forms Favoris'
      case 2: return 'Forms Recents'
      case 3: return 'Mes Forms'
      default: return 'Tous Forms'
    }
  }
  function selectRows(){
    let rows = []
    if(table.tab===1){
      rows = table.rows.filter(function(row){
        return props.control.user.favorites.indexOf(row.id)!==-1;
      })
    }
    else if(table.tab===2){
      rows = table.rows.filter(function(row){
        return row.id in props.control.user.recents;
      })
    }
    else if(table.tab===3){
      rows = table.rows.filter(function(row){
        return props.control.user.created.indexOf(row.id)!==-1;
      })
    }
    else{
      rows = table.rows
    }
    if(table.search!==''){
      rows = rows.filter(function(row){
        for(let i=0;i<table.columns.length;i++){
          if(table.selectedColumns[i] && table.columns[i].id!=='favorite' && row[table.columns[i].id].toString().toLowerCase().includes(table.search.toLowerCase())){
            return true
          }
        }
        return false
      })
    }
    return rows
  }
  return (
    <Grid item container direction="column" justifyContent="center" alignItems="center" style={{paddingTop:'2rem'}}>
      <Grid item>
        <Tabs value={table.tab} onChange={changeTab} indicatorColor={table.tab===3?"secondary":"primary"} textColor={table.tab===3?"secondary":"primary"}>
          <Tab label="Public"/>
          <Tab label={"Favoris ("+props.control.user.favorites.length+")"}/>
          <Tab label="Récents"/>
          {!props.control.user.admin? null : <Tab label={"Mes Forms ("+props.control.user.created.length+")"}/>}
        </Tabs>
      </Grid>
      <Grid item>
        <Paper elevation={3}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle" style={{flex: '1 1 100%'}}>
              {textTab()} {table.search!==''?'(Searching)':null}
            </Typography>
            <Tooltip title="Search">
            <TextField onChange={changeSearch} InputProps={{startAdornment:(<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} placeholder="Search" variant="outlined"/>
            </Tooltip>
            <Tooltip title="Select Columns">
              <IconButton onClick={openSelect}>
                <TocIcon />
              </IconButton>
            </Tooltip>
            <Menu keepMounted anchorEl={table.anchorSelect} open={Boolean(table.anchorSelect)} onClose={closeSelect}>
              {table.columns.map((column,i) => (
                <ListItem key={column.id}>
                  <FormControlLabel control={<Checkbox checked={table.selectedColumns[i]} onChange={()=>changeSelectedColumns(i)}/>} label={column.label}/>
                </ListItem>
              ))}
                {showResetButton()?null:
                  <MenuItem alignItems='center' onClick={resetColumns}>
                    Reset to Default
                  </MenuItem>
                }
            </Menu>
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {table.columns.map((column,i) => {
                    if(table.selectedColumns[i]) return(
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                        <b>{column.label}</b>
                      </TableCell>
                    )
                    else return null
                  })}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {selectRows().slice(table.page*table.perPage, table.page*table.perPage+table.perPage).map((row) => {
                  return(
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {table.columns.map((column,i) => {
                        if(table.selectedColumns[i]){
                          if(column.id === 'favorite'){
                            return(
                              <TableCell key={column.id} align={column.align}>
                                <IconButton onClick={()=>handleFavorite(row)}>
                                  {props.control.user.favorites.indexOf(row.id)!==-1?<FavoriteIcon />:<FavoriteBorderIcon />}
                                </IconButton>
                              </TableCell>
                            )
                          }
                          else if(column.id === 'last_updated'){
                            return(
                              <TableCell key={column.id} align={column.align}>
                                {new Date(row[column.id]).toISOString().slice(0, 10)}
                              </TableCell>
                            )
                          }
                          else if(column.id === 'keywords'){
                            return(
                              <TableCell key={column.id} align={column.align}>
                                {row[column.id].join(', ')}
                              </TableCell>
                            )
                          }
                          else{
                            return(
                              <TableCell key={column.id} align={column.align}>
                                {row[column.id]}
                              </TableCell>
                            )
                          }
                        }
                        else return null
                      })}
                      <FormCard {...props} row={row}/>
                    </TableRow>
                  )})}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination rowsPerPageOptions={table.perPageOptions} component="div" count={selectRows().length} rowsPerPage={table.perPage} page={table.page} onPageChange={changePage} onRowsPerPageChange={changePerPage}/>
        </Paper>
      </Grid>
    </Grid>
  );
}