import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicCreateDto } from './dto/comic.create.dto';
import { validate } from 'class-validator';
import { ComicEntity } from './comic.entity';
import { AutorService } from '../autor/autor.service';
import { AutorEntity } from '../autor/autor.entity';
import { GeneroService } from '../genero/genero.service';
import { GeneroEntity } from '../genero/genero.entity';

@Controller('vxt/comic')
export class ComicController{
  constructor(private readonly _comicServices:ComicService,
              private readonly _autorServices:AutorService,
              private readonly _generoServices:GeneroService){

  }
  @Get('crearComic')
  async crearComic(
    @Res() res
  ){
    try{
      var autores = await this.buscarAutores();
      var generos = await this.buscarGeneros();
    }catch (e) {
      console.error(e);
    }

    console.log(autores);
    console.log(generos);
    res.render('comic/crear-editar-comic',
      {
        autores:autores,
        generos:generos
      });
  }

  async buscarGeneros():Promise<GeneroEntity[]>{
    try {
      return await this._generoServices.listar();
    }catch (e) {
      console.error(e);
    }
  }

  async buscarAutores():Promise<AutorEntity[]>{
    try{
      return await this._autorServices.listar();
    }catch(e){
      console.error(e);
    }
  }

  @Post('comic-crear')
  async crearC(
    @Res() res,
    @Body() comic:ComicEntity
  ){
    let comicValidar = new ComicCreateDto();
    comicValidar.idComic = comic.idComic;
    comicValidar.nombreComic = comic.nombreComic;
    comicValidar.isbnComic = comic.isbnComic;
    comicValidar.imagenComic = comic.imagenComic;
    if(comic.estadoComic)
      comic.estadoComic=true;
    else
      comic.estadoComic=false;

    try{
      const errores = await validate(comicValidar);

      if(errores.length>0){
        console.log("Errores");
        console.log(errores);
      }else{
        const respuesta =await this._comicServices.crear(comic);
        console.log(respuesta);
        res.redirect('/vxt/menu');
      }
    }
    catch (e) {
        console.log(e);
    }
  }

  async buscarComics():Promise<ComicEntity[]>{
    try{
      return await this._comicServices.listar();
    }catch (e) {
      console.error(e);
    }
  }

  @Get("lista")
  async listarComics(
    @Res() res
  ){
    try{
      var comics = await this.buscarComics();
    }catch (e) {
      console.error(e);
    }

    console.log(comics);
    res.render('comic/comic-listar',{
      comics:comics
    })
  }
}
