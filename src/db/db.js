export const commands = [
  { command: 'git init', about: 'Parsely — библиотека, которая валидирует формы прямо на фронте, благодаря чему повышается быстродействие приложения.' },
  { command: 'git clone https://github.com/libgit2/libgit2', about: 'Эта команда создаёт каталог libgit2, инициализирует в нём подкаталог .git, скачивает все данные для этого репозитория и извлекает рабочую копию последней версии. Если вы перейдёте в только что созданный каталог libgit2, то увидите в нём файлы проекта, готовые для работы или использования. Для того, чтобы клонировать репозиторий в каталог с именем, отличающимся от libgit2, необходимо указать желаемое имя, как параметр командной строки: ' },
  { command: 'git status', about: 'Основной инструмент, используемый для определения, какие файлы в каком состоянии находятся — это команда git status.' },
  { command: 'git add README', about: 'Для того чтобы начать отслеживать (добавить под версионный контроль) новый файл, используется команда git add. Чтобы начать отслеживание файла README, вы можете выполнить следующее: ' },
  { command: 'git commit', about: 'Эта команда откроет выбранный вами текстовый редактор. Простейший способ зафиксировать изменения — это набрать git commit:' },
]