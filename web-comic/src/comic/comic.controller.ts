import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicCreateDto } from './dto/comic.create.dto';
import { validate } from 'class-validator';
import { ComicEntity } from './comic.entity';
import { AutorService } from '../autor/autor.service';
import { AutorEntity } from '../autor/autor.entity';
import { GeneroService } from '../genero/genero.service';
import { GeneroEntity } from '../genero/genero.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import {storage} from '../helper';
import { ComicUpdateDto } from './dto/comic.update.dto';

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
    res.render('comic/crear-editar-comic',
      {
        autores:autores,
        generos:generos,
        creando:true
      });
  }
  @Get('editarComic/:idComic')
  async editar(
    @Res() res,
    @Param() idComic
  ){
    try{
      var comic = await this._comicServices.buscar(idComic);
      var autores = await this.buscarAutores();
      var generos = await this.buscarGeneros();
    }catch (e) {
      console.error(e)
    }
    res.render('comic/crear-editar-comic',
      {
        autores:autores,
        generos:generos,
        unidad:comic,
        creando:false
      });  }

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

  @Get('mostrar/:id_comic')
  async mostrar(
    @Res() res,
    @Param('id_comic') idComic
  ){
    try{
      var comic = await this._comicServices.buscar(idComic);
    }catch (e) {
      console.error(e)
    }
    if(comic!=null){
      res.render('comic/comic-mostrar',{
        comics:comic
      });
    }else{
      res.send({
          mensaje:"Error",
          error:"500"
      });
    }
  }


  @Post('comic-crear')
  @UseInterceptors(
    FileInterceptor(
'imagenComic',
      {
        storage: storage
      }
  )
  )
  async crearC(
    @Res() res,
    @Body() comic:ComicEntity,
    @UploadedFile() file
  ){
    let comicValidar = new ComicCreateDto();
    comicValidar.idComic = comic.idComic;
    comicValidar.nombreComic = comic.nombreComic;
    comicValidar.isbnComic = comic.isbnComic;
    comicValidar.descripcionComic = comic.descripcionComic;
    file.path=file.path.replace("publico","");
    comic.imagenComic = file.path.split("\\").join("/");
    comicValidar.imagenComic = comic.imagenComic;
    console.log(comic);
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

  @Post('comic-editar/:idComic')
  @UseInterceptors(
    FileInterceptor(
      'imagenComic',
      {
        storage: storage
      }
    )
  )
  async editarC(
    @Res() res,
    @Body() comic:ComicEntity,
    @Param('idComic') idComic,
    @UploadedFile() file
  ){
    try{
      var comicActualizado = await this._comicServices.buscar(idComic);
      comicActualizado = comic;
      comicActualizado.idComic = +idComic;
    }catch (e) {
      console.error(e)
    }
    let comicValidar = new ComicUpdateDto();
    comicValidar.idComic = comicActualizado.idComic;
    comicValidar.nombreComic = comicActualizado.nombreComic;
    comicValidar.isbnComic = comicActualizado.isbnComic;
    comicValidar.descripcionComic = comicActualizado.descripcionComic;
    file.path=file.path.replace("publico","");
    comicActualizado.imagenComic = file.path.split("\\").join("/");
    comicValidar.imagenComic = comicActualizado.imagenComic;
    if(comicActualizado.estadoComic)
      comicActualizado.estadoComic=true;
    else
      comicActualizado.estadoComic=false;
    try{
      const errores = await validate(comicValidar);

      if(errores.length>0){
        console.log("Errores");
        console.log(errores);
      }else{
        const respuesta =await this._comicServices.actualizar(+idComic,comic);
        console.log(respuesta);
        res.redirect('/vxt/comic/mostrar/'+idComic);
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
