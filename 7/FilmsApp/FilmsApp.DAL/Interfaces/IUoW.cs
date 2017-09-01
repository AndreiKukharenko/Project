using System;
using FilmsApp.DAL.Repositories;

namespace FilmsApp.DAL.Interfaces
{
    public interface IUoW : IDisposable
    {
        IFilmsRepository FilmsRepository { get; }

        ICommentsRepository CommentsRepository { get; }

        IFilmsImagesRepository FilmsImagesRepository { get; }

        void Save();
    }
}
