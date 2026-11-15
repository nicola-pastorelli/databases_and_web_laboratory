# Teddit

Il progetto ha previsto la progettazione di un database relazionale e lo sviluppo di un sito web dinamico ispirato a Reddit. Il sito permette di creare e gestire blog, pubblicare post e commenti, votare contenuti, seguire blog, salvare post e accedere a funzionalità premium.

---

## Visualizza il sito web

[Teddit](https://teddit.duckdns.org/)

---

## Struttura del repository

```
databases_and_web_laboratory/
│
├── database/
│   └── teddit.sql
│
├── docs/
│   ├── relazione.pdf
│   └── specifiche.pdf
│
├── website/
│   ├── css/
│   │   ├── bootstrap/
│   │   │   ├── bootstrap-grid.min.css
│   │   │   ├── bootstrap-utilities.min.css
│   │   │   └── bootstrap.min.css
│   │   └── style.css
│   │
│   ├── images/
│   │   ├── assets/
│   │   │   ├── click_ad.gif
│   │   │   ├── fine.jpg
│   │   │   ├── get_premium.png
│   │   │   ├── hello_ad.gif
│   │   │   ├── inception_ad.gif
│   │   │   ├── logo.png
│   │   │   ├── processing.gif
│   │   │   ├── question_mark.png
│   │   │   └── trash.jpg
│   │   └── uploads/
│   │       ├── blogs/
│   │       │   └── 1.png
│   │       ├── posts/
│   │       └── profiles/
│   │           └── 0.png
│   │
│   ├── includes/
│   │   ├── _authorize.php
│   │   ├── _autocomplete.php
│   │   ├── _change_category.php
│   │   ├── _change_results.php
│   │   ├── _check_email.php
│   │   ├── _check_username.php
│   │   ├── _create_blog.php
│   │   ├── _create_comment.php
│   │   ├── _create_post.php
│   │   ├── _delete.php
│   │   ├── _delete_image.php
│   │   ├── _delete_profile.php
│   │   ├── _edit_blog.php
│   │   ├── _edit_comment.php
│   │   ├── _edit_post.php
│   │   ├── _edit_profile.php
│   │   ├── _follow.php
│   │   ├── _forgot.php
│   │   ├── _get_comment.php
│   │   ├── _get_subcategories.php
│   │   ├── _like_comment.php
│   │   ├── _like_post.php
│   │   ├── _login.php
│   │   ├── _logout.php
│   │   ├── _premium_subscription.php
│   │   ├── _recovery.php
│   │   ├── _reset.php
│   │   ├── _save.php
│   │   ├── _signup.php
│   │   ├── db_connection.php
│   │   ├── footer.php
│   │   ├── head.php
│   │   ├── header.php
│   │   ├── session.php
│   │   ├── sidebar.php
│   │   └── time_ago.php
│   │
│   ├── js/
│   │   ├── vendor/
│   │   │   ├── additional-methods.min.js
│   │   │   ├── bootstrap.bundle.min.js
│   │   │   ├── jquery-3.7.1.min.js
│   │   │   └── jquery.validate.min.js
│   │   ├── comment_warning.js
│   │   ├── follow.js
│   │   ├── follow_warning.js
│   │   ├── like_comment.js
│   │   ├── like_post.js
│   │   ├── save_post.js
│   │   └── track_visit.js
│   │
│   ├── blog.php
│   ├── blog_deleted.php
│   ├── categories.php
│   ├── category.php
│   ├── create_blog.php
│   ├── create_post.php
│   ├── delete_profile.php
│   ├── edit_blog.php
│   ├── edit_post.php
│   ├── edit_profile.php
│   ├── following.php
│   ├── forgot.php
│   ├── index.php
│   ├── login.php
│   ├── my_blogs.php
│   ├── post.php
│   ├── premium.php
│   ├── processing.php
│   ├── profile.php
│   ├── reset.php
│   ├── search_results.php
│   ├── show_ad.php
│   └── signup.php
│
└── README.md
```

*I file presenti in `website/images/uploads/` non sono elencati, ad eccezione delle immagini predefinite dei blog e dei profili.*

### `database/`

- `teddit.sql`: esportazione del database relazionale con tabelle, dati, trigger ed evento per la scadenza degli abbonamenti premium.

### `docs/`

- `relazione.pdf`: relazione del progetto, con la progettazione concettuale e logica del database e la descrizione delle funzionalità del sito.
- `specifiche.pdf`: specifiche del progetto.

### `website/`

- `index.php`: homepage con feed dei post e blog più recenti.
- `blog.php`: pagina di un blog con informazioni, post e gestione dei coautori.
- `blog_deleted.php`: pagina di conferma dell'avvenuta eliminazione di un blog.
- `categories.php` e `category.php`: esplorazione delle categorie e dei blog associati.
- `create_blog.php` e `edit_blog.php`: creazione e modifica dei blog.
- `create_post.php` e `edit_post.php`: creazione e modifica dei post.
- `post.php`: visualizzazione di un post e dei relativi commenti.
- `my_blogs.php` e `following.php`: visualizzazione dei propri blog e di quelli seguiti.
- `profile.php`, `edit_profile.php` e `delete_profile.php`: visualizzazione, modifica ed eliminazione del profilo utente.
- `signup.php` e `login.php`: registrazione e autenticazione degli utenti.
- `forgot.php` e `reset.php`: recupero dell'account e reimpostazione della password.
- `search_results.php`: ricerca di blog, post, categorie e utenti.
- `premium.php` e `processing.php`: gestione dell'abbonamento premium e pagina di simulazione del pagamento.
- `show_ad.php`: visualizzazione di un annuncio per gli utenti non premium.

#### `css/`

- `bootstrap/`: fogli di stile del framework Bootstrap.
- `style.css`: foglio di stile personalizzato.

#### `images/`

- `assets/`: logo, immagini e animazioni utilizzate nell'interfaccia e negli annunci.
- `uploads/`: immagini dei blog, dei post e dei profili.

#### `includes/`

- `db_connection.php`: connessione al database.
- `session.php`: avvio della sessione PHP.
- `head.php`, `header.php`, `footer.php` e `sidebar.php`: componenti condivisi dell'interfaccia.
- `time_ago.php`: funzione che calcola il tempo trascorso dalla pubblicazione dei contenuti.
- `_signup.php`, `_login.php` e `_logout.php`: operazioni di registrazione, accesso e disconnessione.
- `_check_email.php` e `_check_username.php`: controllo della disponibilità dei dati di registrazione.
- `_forgot.php`, `_recovery.php` e `_reset.php`: operazioni di recupero dell'account e reimpostazione della password.
- `_create_blog.php`, `_edit_blog.php`, `_create_post.php` e `_edit_post.php`: operazioni di creazione e modifica di blog e post.
- `_create_comment.php`, `_edit_comment.php` e `_get_comment.php`: gestione dei commenti.
- `_delete.php` e `_delete_image.php`: eliminazione dei contenuti e delle immagini caricate.
- `_edit_profile.php` e `_delete_profile.php`: aggiornamento ed eliminazione del profilo.
- `_authorize.php`: autorizzazione e revoca dei coautori di un blog.
- `_follow.php` e `_save.php`: gestione dei blog seguiti e dei post salvati.
- `_like_post.php` e `_like_comment.php`: gestione dei voti ai post e ai commenti.
- `_autocomplete.php`, `_change_results.php`, `_change_category.php` e `_get_subcategories.php`: ricerca, aggiornamento dei risultati e gestione delle categorie.
- `_premium_subscription.php`: attivazione e disattivazione dell'abbonamento premium.

#### `js/`

- `vendor/`: librerie JavaScript Bootstrap, jQuery e jQuery Validation.
- `follow.js`: gestione delle iscrizioni ai blog tramite AJAX.
- `like_post.js` e `like_comment.js`: aggiornamento dei voti tramite AJAX.
- `save_post.js`: gestione del salvataggio dei post tramite AJAX.
- `comment_warning.js` e `follow_warning.js`: messaggi di avviso per le interazioni che richiedono l'accesso.
- `track_visit.js`: registrazione delle visite al sito.

---

## Autori

- Javier Borges  
- Nicola Pastorelli