SQLite format 3   @     �                                                             � .?�    @�%                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   �==�tabletemporary_noticias_modeltemporary_noticias_modelCREATE TABLE "temporary_noticias_model" ("idNews" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "titulo" varchar NOT NULL, "noticia" varchar NOT NULL, "imagem" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), "gostei" integer NOT NULL, "userIdUser" integer, CONSTRAINT "FK_cd31ac3f4789f8e03e6bd863aac" FOREIGN KEY ("userIdUser") REFERENCES "user_mod  �==�tabletempo�d))�tablenoticias_modelnoticias_modelCREATE TABLE "noticias_model" ("idNews" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "titulo" varchar NOT NULL, "noticia" varchar NOT NULL, "imagem" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), "gostei" integer NOT NULL, "userIdUser" integer, CONSTRAINT "FK_cd31ac3f4789f8e03e6bd863aac" FOREIGN KEY ("userIdUser") REFERENCES "user_model" ("idUser") ON DELETE NO ACTION ON UPDATE NO ACTION)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�=!!�Etableuser_modeluser_modelCREATE TABLE "user_model" ("idUser" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "login" varchar NOT NULL, "senha" varchar NOT NULL)   
� ���~`C$	��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 -nome 1marcos@gmail.com1212	 )1231chaa@gmail.com1232 %1231da@gmail.com1232 -1232dasdsa@gmail.com1232 +jujueqweqw@gmai.com123 3MArcos de pirituba 1232 123121123121212  -marcos123123@gmail.com12321# 3marcosdasdadasd@gmail.com12321# 3marcosdasdadasd@gmail.com12321� � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   � temp)noticias_model   	user_model   !user_model
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                � � �R�TT��������                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   --3	Noticias tragicasdsdfsddasdadasd2021-01-09 22:25:54  �-3	Noticias tragicasdsdfsddasdadasd2021-01-09 22:25:53  �-��--33		Noticia urgente noticia rápida dasdadasd@gmail.com2021-01-11 01:19:17�� 1A�13	Brasil perde tudo brasil perde mais uma vez https://www.gazetaesportiva.com/wp-content/uploads/imagem/2017/03/13/000_MH9GJ.jpg2021-01-10 14:36:23� !3�O3	Noticia 1 Informação norma https://cdnv2.moovin.com.br/livr�D�A	 +!�%3	Titulo noticia noticia 01https://lh3.googleusercontent.com/proxy/Uf-J73amB959ihZO9Bf5nPg5Z9ETfA549hJz7aRbpU8JEW0HnqFGg_B1S5IQbHMhYFTOS7CG4-IuqOvC9DjoXJHCHFwUwzAnLJq_2021-01-11 12:02:360 3	 dasasdasddasdaadasdad2021-01-10 00:22:05   2'3%3	 nova noticia noticia da noticia va procuH '3%3 nova noticia noticia da noticia va procurar 2021-01-10 00:20:34